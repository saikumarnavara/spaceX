import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SpaceXService } from "../../../services/spacex-services";
import {
  getRockets,
  getRocketsFailure,
  getRocketDetails,
} from "../../../redux/slices/rockets-slice";
import Loader from "../Loader/Loader";

interface RocketDetailsProps {
  rockets: {
    loading: boolean;
    error: string | null;
    rocketDetails: any | null;
  };
}

const RocketDetails: React.FC = () => {
  const dispatch = useDispatch();
  const { loading, error, rocketDetails } = useSelector(
    (state: RocketDetailsProps) => state.rockets
  );

  const useQuery = () => new URLSearchParams(useLocation().search);
  const query = useQuery();
  const rocketId = query.get("id");

  useEffect(() => {
    if (rocketId) {
      const fetchRocketDetails = async () => {
        dispatch(getRockets());
        try {
          const response = await SpaceXService.getRocketsById(rocketId);
          dispatch(getRocketDetails(response.data));
        } catch (err) {
          console.error("Error fetching rocket details:", err);
          dispatch(getRocketsFailure(err));
        }
      };

      fetchRocketDetails();
    }
  }, [rocketId, dispatch]);

  if (loading) return <Loader />;
  if (error)
    return <div className="text-red-500 text-center">Error: {error}</div>;

  if (!rocketDetails) return null;

  const {
    name,
    description,
    height,
    diameter,
    mass,
    stages,
    cost_per_launch,
    country,
    company,
    flickr_images,
    success_rate_pct,
    first_flight,
    wikipedia,
  } = rocketDetails;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-6">{name}</h1>
      <p className="text-gray-700 text-center mb-4">{description}</p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-4">
        {flickr_images.map((image: string, index: number) => (
          <img
            key={index}
            src={image}
            alt={`${name} ${index + 1}`}
            className="w-full h-auto object-cover rounded-md shadow-lg"
          />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-bold mb-2">Specifications</h2>
          <ul className="text-gray-700 space-y-2">
            <li>
              <strong>Height:</strong> {height.meters} meters / {height.feet}{" "}
              feet
            </li>
            <li>
              <strong>Diameter:</strong> {diameter.meters} meters /{" "}
              {diameter.feet} feet
            </li>
            <li>
              <strong>Mass:</strong> {mass.kg} kg / {mass.lb} lb
            </li>
            <li>
              <strong>Stages:</strong> {stages}
            </li>
            <li>
              <strong>Cost per Launch:</strong> $
              {cost_per_launch.toLocaleString()}
            </li>
          </ul>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-bold mb-2">General Information</h2>
          <ul className="text-gray-700 space-y-2">
            <li>
              <strong>Country:</strong> {country}
            </li>
            <li>
              <strong>Company:</strong> {company}
            </li>
            <li>
              <strong>First Flight:</strong>{" "}
              {new Date(first_flight).toLocaleDateString()}
            </li>
            <li>
              <strong>Success Rate:</strong> {success_rate_pct}%
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-6">
        <a
          href={wikipedia}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline hover:text-blue-700"
        >
          Learn more on Wikipedia
        </a>
      </div>
    </div>
  );
};

export default RocketDetails;
