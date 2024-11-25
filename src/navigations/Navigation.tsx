import { Routes, Route } from "react-router-dom";
import Home from "../components/screens/Home";
import HistoryScreen from "../components/screens/History";
import RocketsScreen from "../components/screens/Rockets";
import RocketDetails from "../components/containers/Rockets/RocketDetails";
import AboutScreen from "../components/screens/About";
import LaunchScreen from "../components/screens/Launch";
import ShipsScreen from "../components/screens/Ships";

const route = (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/history" element={<HistoryScreen />} />
    <Route path="/rockets" element={<RocketsScreen />} />
    <Route path="/rockets/details" element={<RocketDetails />} />
    <Route path="/launches" element={<LaunchScreen />} />
    <Route path="/about" element={<AboutScreen />} />
    <Route path="/ships" element={<ShipsScreen />} />
  </Routes>
);
export default route;
