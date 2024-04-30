import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import TouristSpotCard from "../components/TouristSpotCard";
import { Helmet } from "react-helmet-async";

function AllTouristsSpot() {
  const { touristsSpotsData } = useContext(AuthContext);
  return (
    <>
      <Helmet>
        <title>GoTour Hero - All Tourists Spot</title>
      </Helmet>
      <h2 className="text-4xl mb-8 mt-10 font-bold text-center font-playfair">
        All Tourists Spots
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 mt-10 max-sm:mx-4">
        {touristsSpotsData.map((touristSpot) => (
          <TouristSpotCard
            key={touristSpot.tourists_spot_name}
            touristSpot={touristSpot}
          />
        ))}
      </div>
    </>
  );
}

export default AllTouristsSpot;
