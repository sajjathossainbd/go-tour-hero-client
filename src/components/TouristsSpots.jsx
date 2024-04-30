import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import TouristSpotCard from "./TouristSpotCard";
import { Link } from "react-router-dom";

function TouristsSpots() {
  const { touristsSpotsData } = useContext(AuthContext);
  return (
    <div>
      <h2 className="text-4xl mb-8 mt-10 font-bold text-center font-playfair">
        Tourists Spots
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 mt-10 max-sm:mx-4">
        {touristsSpotsData.slice(0, 6).map((touristSpot) => (
          <TouristSpotCard
            key={touristSpot.tourists_spot_name}
            touristSpot={touristSpot}
          />
        ))}
      </div>
      <div className="py-10 text-center">
        <Link to={"/all-tourists-spot"} className="btn btn-outline btn-accent ">
          More Tourists Spot
        </Link>
      </div>
    </div>
  );
}

export default TouristsSpots;
