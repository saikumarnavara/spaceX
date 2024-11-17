import { useEffect, useState } from "react";
import { SpaceXService } from "../../../services/spacex-services";
import {
  fetchLaunches,
  fetchLaunchesSuccess,
  fetchLaunchesFailure,
  resetLaunches,
} from "../../../redux/slices/launch-slice";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader/Loader";
import Latest from "./Latest";
import Next from "./Next";
import Past from "./Past";
import Upcoming from "./Upcoming";

const Launch = () => {
  const dispatch = useDispatch();
  const [launchTypee, setlaunchType] = useState("latest");
  const { loading, launches } = useSelector((state: any) => state.launches);
  console.log(launches);

  let launchTypes = [
    {
      name: "Latest",
      value: "latest",
    },
    {
      name: "Next",
      value: "next",
    },
    {
      name: "Past",
      value: "past",
    },
    {
      name: "Upcoming",
      value: "upcoming",
    },
  ];

  useEffect(() => {
    const getLaunches = async () => {
      try {
        dispatch(resetLaunches());
        dispatch(fetchLaunches());
        const response = await SpaceXService.getRocketLaunches(launchTypee);
        dispatch(fetchLaunchesSuccess(response.data));
      } catch (error) {
        console.log(error);
        dispatch(fetchLaunchesFailure(error));
      }
    };
    getLaunches();
  }, [launchTypee]);

  const ReturnLaunchComponent = () => {
    if (launchTypee === "latest") {
      return <Latest info={launches} />;
    } else if (launchTypee === "next") {
      return <Next info={launches} />;
    } else if (launchTypee === "past") {
      return <Past info={launches} />;
    } else if (launchTypee === "upcoming") {
      return <Upcoming info={launches} />;
    } else {
      return <Latest info={launches} />;
    }
  };
  return (
    <div>
      {loading && <Loader />}
      <div className="flex items-center justify-center font-bold font-Poppins-Bold text-2xl">
        SpaceX Launches
      </div>

      <div className="launch-type-container">
        {launchTypes.map((launchType) => (
          <button
            key={launchType.value}
            className="launch-type"
            onClick={() => setlaunchType(launchType.value)}
            data-active={launchType.value === launchTypee}
          >
            {launchType.name}
          </button>
        ))}
      </div>
      <div className="launch-info-container">
        <ReturnLaunchComponent />
      </div>
    </div>
  );
};

export default Launch;
