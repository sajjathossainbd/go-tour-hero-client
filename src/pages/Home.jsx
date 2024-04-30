import { Helmet } from "react-helmet-async";
import TouristsSpots from "../components/TouristsSpots";
import Slider from "../components/Slider";

function Home() {
  return (
    <div>
      <Helmet>
        <title>GoTour Hero - Home</title>
      </Helmet>
      <Slider/>
      <TouristsSpots />
    </div>
  );
}

export default Home;
