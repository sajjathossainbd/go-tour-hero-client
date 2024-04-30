/* eslint-disable react/prop-types */
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";

function CountryCard({ touristSpot }) {
  const { image, country_name, short_description } = touristSpot;
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="px-6 pt-6">
        <figure className="">
          <img src={image} alt="estate image" className="rounded-lg" />
        </figure>
      </div>

      <div className="card-body relative">
        {/* start */}
        <div className="location flex gap-2">
          <CiLocationOn />
          <p>{country_name}</p>
        </div>
        <div className="flex justify-between pb-10">
          <h2 className="text-xl">{short_description}</h2>
        </div>
        <div className="card-actions justify-end absolute bottom-4 right-4 ">
          <Link to={"`/touristSpot/${id}`"} className="btn btn-outline">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CountryCard;
