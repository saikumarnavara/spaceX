import { Routes, Route } from "react-router-dom";
import Home from "../components/screens/Home";
import HistoryScreen from "../components/screens/History";
import RocketsScreen from "../components/screens/Rockets";
import RocketDetails from "../components/containers/Rockets/RocketDetails";
import AboutScreen from "../components/screens/About";
const route = (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/history" element={<HistoryScreen />} />
    <Route path="/rockets" element={<RocketsScreen />} />
    <Route path="/rockets/details" element={<RocketDetails />} />
    <Route path="/about" element={<AboutScreen />} />
  </Routes>
);
export default route;
