import { useEffect } from "react";
import { SpaceXService } from "../../../services/spacex-services";
import {
  fetchShips,
  fetchShipsSuccess,
  fetchShipsFailure,
} from "../../../redux/slices/ships-slice";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader/Loader";

const Ships = () => {
  const dispatch = useDispatch();
  const { loading, ships, error } = useSelector((state: any) => state.ships);

  useEffect(() => {
    const fetchShipsData = async () => {
      try {
        dispatch(fetchShips());
        const response = await SpaceXService.getShips();
        dispatch(fetchShipsSuccess(response.data));
      } catch (error) {
        dispatch(fetchShipsFailure(error));
      }
    };
    fetchShipsData();
  }, [dispatch]);

  return (
    <div className="p-4">
      {loading && <Loader />}
      {error && (
        <div className="text-red-500">Failed to load ships: {error}</div>
      )}
      {!loading && !error && ships.length === 0 && (
        <div className="text-gray-500">No ships available.</div>
      )}
      {!loading && !error && ships.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ships &&
            ships?.length > 0 &&
            ships?.map((ship: any) => (
              <div
                key={ship.id}
                className="bg-gray-800 text-white rounded-lg shadow-md overflow-hidden"
              >
                {ship.image && (
                  <img
                    src={ship.image}
                    alt={ship.name}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{ship.name}</h3>
                  <p className="text-gray-400">Type: {ship.type || "N/A"}</p>
                  <p className="text-gray-400">
                    Roles: {ship.roles?.join(", ")}
                  </p>
                  {ship.link && (
                    <a
                      href={ship.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                      More Details
                    </a>
                  )}
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Ships;
