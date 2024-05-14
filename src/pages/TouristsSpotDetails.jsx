/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { CiLocationOn } from "react-icons/ci";
import { useLoaderData, useParams } from "react-router-dom";

function TouristsSpotDetails() {
  const touristsSpotsData = useLoaderData();
  const {
    image,
    tourists_spot_name,
    short_description,
    country_name,
    location,
    average_cost,
    seasonality,
    travel_time,
    total_visitors_per_year,
  } = touristsSpotsData;

  return (
    <>
      <Helmet>
        <title>GoTour Hero - Details</title>
      </Helmet>
      <div className="grid lg:grid-cols-2 max-sm:px-6 gap-10 my-10 items-center justify-center">
        <div className=" rounded-lg flex items-center justify-center py-16">
          <img className="rounded-lg h-full" src={image} alt="" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="location flex gap-2">
            <CiLocationOn />
            <p>
              {location} ({country_name})
            </p>
          </div>
          <h2 className="text-2xl font-bold my-2">{tourists_spot_name}</h2>
          <p>{short_description}</p>

          <div className="border-b-[0.2px] border-solid my-2"></div>
          <p className="text-lg">
            Seasonality: <span className="font-bold">{seasonality}</span>
          </p>
          <p className="text-lg">
            Avarage Cost: <span className="font-bold">{average_cost}</span>
          </p>
          <p className="text-lg">
            Travel Time: <span className="font-bold">{travel_time}</span>
          </p>
          <p className="text-lg">
            Total Visitor Per Year:{" "}
            <span className="font-bold">{total_visitors_per_year}</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default TouristsSpotDetails;
