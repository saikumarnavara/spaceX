import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SpaceXService } from "../../../services/spacex-services";
import {
  getHistory,
  getHistorySuccess,
  getHistoryFailure,
} from "../../../redux/slices/history-slice";
import Loader from "../Loader/Loader";

const History = () => {
  const dispatch = useDispatch();
  const { loading, history, error } = useSelector(
    (state: any) => state.history
  );

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        dispatch(getHistory());
        const response = await SpaceXService.getRocketsHistory();
        dispatch(getHistorySuccess(response.data));
      } catch (error) {
        console.error(error);
        dispatch(getHistoryFailure(error));
      }
    };
    fetchHistory();
  }, [dispatch]);

  return (
    <div className="landing p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <h1 className="text-4xl font-bold text-center mb-8">SpaceX History</h1>
      {error && (
        <p className="text-red-600 text-center">
          Failed to load history: {error.message}
        </p>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-4 justify-center">
        {history &&
          history.map((item: any) => (
            <div
              className="card bg-white shadow-md rounded-lg p-4 flex flex-col justify-between max-w-sm"
              key={item.id}
            >
              <div>
                <h2 className="text-xl font-semibold mb-2 font-Poppins-Bold">
                  {item.title}
                </h2>
                <p className="text-gray-700 mb-4">{item.details}</p>
              </div>
              <p className=" text-gray-500 text-sm">
                Event Date :{" "}
                {new Date(item.event_date_utc).toLocaleDateString()}
              </p>

              {item.links.article && (
                <a
                  href={item.links.article}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto text-blue-500 hover:underline"
                >
                  Read More
                </a>
              )}
            </div>
          ))}
      </div>
      {loading && <Loader />}
    </div>
  );
};

export default History;
