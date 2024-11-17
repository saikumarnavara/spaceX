import route from "./navigations/Navigation";
import Navbar from "./components/containers/navbar/Navbar";
import ScrollToTop from "./utils/Utils";
import "./index.css";
function App() {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      {route}
    </div>
  );
}

export default App;
