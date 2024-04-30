import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

function Countries() {
  const { touristsSpotsData } = useContext(AuthContext);
  const bangladesh = touristsSpotsData.filter(
    (spot) => spot.country_name.toLowerCase() === "Bangladesh".toLowerCase()
  );
  return (
    <div className="">
      <h2 className="text-4xl mb-8 mt-10 font-bold text-center font-playfair">
        Popular Countries
      </h2>
    </div>
  );
}

export default Countries;
