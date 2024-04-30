import { Helmet } from "react-helmet-async";
import TouristsSpots from "../components/TouristsSpots";
import Slider from "../components/Slider";
import QuickExplore from "../components/QuickExplore";

function Home() {
  return (
    <div>
      <Helmet>
        <title>GoTour Hero - Home</title>
      </Helmet>
      <Slider />
      <QuickExplore />
      <TouristsSpots />
    </div>
  );
}

export default Home;
