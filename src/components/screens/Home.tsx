import Rockets from "../containers/Rockets/Rockets";
import History from "../containers/History/History";
import About from "../containers/Landing/About";

const Home = () => {
  return (
    <div className="mt-16">
      <Rockets />
      <History />
      <About />
    </div>
  );
};

export default Home;
