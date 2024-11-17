import Rockets from "../containers/Rockets/Rockets";
import History from "../containers/History/History";
import Dragons from "../containers/Dragons/Dragons";
import About from "../containers/Landing/About";
import Footer from "../containers/footer/Footer";

const Home = () => {
  return (
    <div className="mt-16">
      <Rockets />
      <History />
      <Dragons />
      <About />
      <Footer />
    </div>
  );
};

export default Home;
