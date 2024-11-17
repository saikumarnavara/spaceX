import { useEffect } from "react";
import { SpaceXService } from "../../../services/spacex-services";
import {
  dragonsPending,
  dragonsSuccess,
  dragonsFail,
} from "../../../redux/slices/dragon-slice";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader/Loader";

const Ships = () => {
  const dispatch = useDispatch();
  const { loading, dragons, error } = useSelector(
    (state: any) => state.dragons
  );

  useEffect(() => {
    const fetchDragonData = async () => {
      try {
        dispatch(dragonsPending());
        const response = await SpaceXService.getDragons();
        dispatch(dragonsSuccess(response.data));
      } catch (error) {
        dispatch(dragonsFail(error));
      }
    };
    fetchDragonData();
  }, [dispatch]);

  return (
    <div className="p-8 bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8 text-white">
        SpaceX Dragons
      </h1>

      {loading && <Loader />}

      {error && (
        <div className="text-red-500 text-center">
          Failed to load ships: {error}
        </div>
      )}

      {!loading && !error && dragons?.length === 0 && (
        <div className="text-gray-500 text-center">No ships available.</div>
      )}

      {!loading && !error && dragons?.length > 0 && (
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {dragons?.map((ship: any) => (
            <div
              key={ship.id}
              className="bg-gray-800 text-white rounded-lg shadow-md overflow-hidden max-w-2xl mx-auto"
            >
              <div>
                <img
                  src={ship.flickr_images[0]}
                  alt={ship.name}
                  className="w-full h-64 object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">{ship.name}</h3>
                <p className="text-gray-400 text-lg mb-2">
                  <strong>Type:</strong> {ship.type}
                </p>
                <p className="text-gray-400 text-lg mb-2">
                  <strong>First Flight:</strong> {ship.first_flight}
                </p>
                <p className="text-gray-400 text-lg mb-2">
                  <strong>Crew Capacity:</strong> {ship.crew_capacity}
                </p>
                <p className="text-gray-400 text-lg mb-4">
                  <strong>Orbit Duration:</strong> {ship.orbit_duration_yr}{" "}
                  years
                </p>
                <p className="text-gray-400 text-lg mb-4">
                  <strong>Description:</strong> {ship.description}
                </p>
                <a
                  href={ship.wikipedia}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline text-lg"
                >
                  Learn more on Wikipedia
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Ships;
