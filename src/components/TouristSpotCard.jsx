import { CiLocationOn } from "react-icons/ci";
import {
  MdGroups,
  MdOutlineAccessTime,
} from "react-icons/md";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
function TouristSpotCard({ touristSpot }) {
  const {
    image,
    tourists_spot_name,
    country_name,
    location,
    average_cost,
    seasonality,
    travel_time,
    total_visitors_per_year,
  } = touristSpot;
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="relative">
        <figure className="">
          <img src={image} alt="estate image" className="rounded-t-lg" />
        </figure>
        <div className="badge badge-primary absolute top-4 right-4">New</div>
      </div>

      <div className="card-body">
        {/* start */}
        <div className="location flex gap-2">
          <CiLocationOn />
          <p>
            {location} ({country_name})
          </p>
        </div>
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold">{tourists_spot_name}</h2>
          <h2 className="text-2xl font-bold text-[#31C292]">{average_cost}</h2>
        </div>

        {/* border */}
        <div className="border-dashed border-[0.8px] border-[#13131326] my-2"></div>

        {/* middle */}
        <div className="">
          <div className="flex gap-2">
            <div className="flex gap-1 items-center">
            <MdOutlineAccessTime />
              <p>{travel_time}</p>
            </div>
            <div className="flex gap-1 items-center">
            <MdGroups />
              <p>{total_visitors_per_year}</p>
            </div>
            <div className="flex gap-1 items-center">
            <TiWeatherPartlySunny />
              <p>{seasonality}</p>
            </div>
          </div>
        </div>
        {/* ending */}
        <div className="card-actions justify-end">
          <Link to={"`/touristSpot/${id}`"} className="btn btn-outline">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TouristSpotCard;
