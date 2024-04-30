import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import CountryCard from "./CountryCard";

function Countries() {
  const { touristsSpotsData } = useContext(AuthContext);
 
  return (
    <div className="">
      <h2 className="text-4xl mb-8 mt-24 font-bold text-center font-playfair">
        Popular Countries
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 mt-10 max-sm:mx-4">
        {touristsSpotsData.slice(-6).map((touristSpot) => (
          <CountryCard
            key={touristSpot.tourists_spot_name}
            touristSpot={touristSpot}
          />
        ))}
      </div>
    </div>
  );
}

export default Countries;
