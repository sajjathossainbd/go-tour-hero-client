import { Helmet } from "react-helmet-async";
import TouristsSpots from "../components/TouristsSpots";
import Slider from "../components/Slider";
import QuickExplore from "../components/QuickExplore";
import Countries from "../components/Countries";
import TourPackages from "../components/TourPackages";

function Home() {
  return (
    <div>
      <Helmet>
        <title>GoTour Hero - Home</title>
      </Helmet>
      <Slider />
      <QuickExplore />
      <TouristsSpots />
      <TourPackages />
      <Countries />
    </div>
  );
}

export default Home;
