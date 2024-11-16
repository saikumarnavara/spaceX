import route from "./navigations/Navigation";
import Navbar from "./components/containers/navbar/Navbar";
import "./index.css";
function App() {
  return (
    <div>
      <Navbar />
      {route}
    </div>
  );
}

export default App;
