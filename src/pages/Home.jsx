import { Helmet } from "react-helmet-async";
import TouristsSpots from "../components/TouristsSpots";

function Home() {
  return (
    <div>
      <Helmet>
        <title>GoTour Hero - Home</title>
      </Helmet>
      <TouristsSpots />
    </div>
  );
}

export default Home;
