import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

function TouristsSpotDetails() {
  const [touristsDetails, setTouristsDetails] = useState({});
  const {
    _id,
    image,
    tourists_spot_name,
    country_name,
    location,
    average_cost,
    seasonality,
    travel_time,
    total_visitors_per_year,
  } = touristsDetails;

  const touristsSpotsData = useLoaderData();
  const { id } = useParams();

  useEffect(() => {
    if (touristsSpotsData) {
      const estate = touristsSpotsData.find((estate) => estate.id === +id);
      setTouristsDetails(estate || {});
    }
  }, [touristsSpotsData, id]);
  return (
    <>
      <Helmet>
        <title>GoTour Hero - Details</title>
      </Helmet>
      <div className="grid lg:grid-cols-2 max-sm:px-6 gap-10 my-10">
        <div className=" rounded-lg flex items-center justify-center py-16">
          <img className="rounded-lg h-full" src={image} alt="" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="location flex gap-2">
            <CiLocationOn />
            <p>{location}</p>
          </div>
          <h2 className="text-2xl font-bold my-2">{estate_title}</h2>
          <p>{description}</p>

          <div className="border-b-[0.2px] border-solid my-2"></div>
          <p className="text-lg">
            Segment Name: <span className="font-bold">{segment_name}</span>
          </p>
          <p className="text-lg">
            Price: <span className="font-bold">{price}</span>
          </p>
          <p className="text-lg">
            Status: <span className="font-bold">{status}</span>
          </p>
          <div className="my-2 border-b-[0.2px] border-solid"></div>

          <div className="flex flex-col text-xl gap-2">
            <div className="flex gap-1 items-center">
              <MdOutlineBedroomChild />
              <p>{facilities && facilities[0]}</p>
            </div>
            <div className="flex gap-1 items-center">
              <MdOutlineBathtub />
              <p>{facilities && facilities[1]}</p>
            </div>
            <div className="flex gap-1 items-center">
              <BiDisc />
              <p>{facilities && facilities[2]}</p>
            </div>
            <div className="flex gap-1 items-center">
              <BiDiamond />
              <p>{facilities && facilities[3]}</p>
            </div>
            <div className="flex gap-1 items-center">
              <MdSquareFoot />
              <p>{area}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TouristsSpotDetails;
