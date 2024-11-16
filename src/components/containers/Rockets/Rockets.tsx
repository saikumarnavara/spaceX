import { useEffect } from "react";
import { SpaceXService } from "../../../services/spacex-services";
import {
  getRockets,
  getRocketsSuccess,
  getRocketsFailure,
} from "../../../redux/slices/rockets-slice";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../Loader/Loader";

const Rockets = () => {
  const dispatch = useDispatch();
  const { loading, rockets, error } = useSelector(
    (state: any) => state.rockets
  );

  useEffect(() => {
    dispatch(getRockets());
    SpaceXService.getRockets()
      .then((response) => {
        dispatch(getRocketsSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getRocketsFailure(error.message));
      });
  }, [dispatch]);

  const handleViewMore = (id: string) => {
    window.open(`/rockets/details?id=${id}`, "_blank");
  };

  const truncateDescription = (text: string, wordLimit: number) => {
    const words = text.split(" ");
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(" ") + "...";
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">SpaceX Rockets</h1>
      {loading && <Loader />}
      {error && <p className="text-red-500 text-center">Error: {error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {rockets &&
          rockets.map((rocket: any) => (
            <div
              className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300"
              key={rocket.id}
            >
              <img
                src={rocket.flickr_images[0]}
                alt={rocket.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex-1 flex flex-col">
                <h2 className="text-2xl font-bold mb-2">{rocket.name}</h2>
                <p className="text-gray-700 mb-4 flex-grow">
                  {truncateDescription(rocket.description, 20)}
                </p>
                <p className="text-sm">
                  <strong>Height:</strong> {rocket.height.meters} meters
                </p>
                <p className="text-sm">
                  <strong>Mass:</strong> {rocket.mass.kg} kg
                </p>
                <p className="text-sm">
                  <strong>Cost per Launch:</strong> $
                  {rocket.cost_per_launch.toLocaleString()}
                </p>
                <div className="mt-4 flex justify-between items-center">
                  <a
                    href={rocket.wikipedia}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline hover:text-blue-700"
                  >
                    Learn More
                  </a>
                  <button
                    className="bg-customLightGray text-white px-4 py-2 rounded-md hover:bg-customGray text-red transition duration-300"
                    onClick={() => handleViewMore(rocket.id)}
                  >
                    View More
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Rockets;
