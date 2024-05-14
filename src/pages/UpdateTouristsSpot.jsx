import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";

function UpdateTouristsSpot() {
  const touristsSpotsData = useLoaderData();
  const {
    _id,
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
  const { user } = useContext(AuthContext);

  const handleAddSpot = (event) => {
    event.preventDefault();

    const form = event.target;
    const tourists_spot_name = form.tourists_spot_name.value;
    const country_name = form.country_name.value;
    const location = form.location.value;
    const short_description = form.short_description.value;
    const average_cost = form.average_cost.value;
    const seasonality = form.seasonality.value;
    const travel_time = form.travel_time.value;
    const total_visitors_per_year = form.total_visitors_per_year.value;
    const image = form.image.value;
    const email = form.email.value;
    const name = form.name.value;
    const tourists_spot = {
      tourists_spot_name,
      country_name,
      location,
      short_description,
      average_cost,
      seasonality,
      travel_time,
      total_visitors_per_year,
      image,
      email,
      name,
    };

    // send data to the server
    fetch(`https://go-tour-hero-server.vercel.app/tourists-spot-id/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(tourists_spot),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          console.log(data);
          Swal.fire({
            title: "Success!",
            text: "Tourists Spot Update Successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
          form.reset(); // Reset the form
        } else {
          alert("Failed to add tourists spot"); // Optionally, handle failure
        }
      })
      .catch((error) => {
        console.error("Error:", error); // Optionally, handle error
      });
  };

  return (
    <>
      <Helmet>
        <title>GoTour Hero - Update Tourists Spot</title>
      </Helmet>

      <div className="bg-[#F4F3F0] m-10 px-10 py-20 rounded-lg">
        <h2 className="text-4xl mb-14 font-bold text-center font-playfair">
          Update A Tourists Spots
        </h2>
        <form
          onSubmit={handleAddSpot}
          className="lg:grid lg:grid-cols-2 flex flex-col lg:gap-10 gap-6 mt-6"
        >
          <label className="form-control w-full">
            <span className="text-xl font-bold mb-3">Tourist Spot Name</span>
            <input
              type="text"
              name="tourists_spot_name"
              defaultValue={tourists_spot_name}
              className="input input-bordered w-full"
              required
            />
          </label>
          <label className="form-control w-full">
            <span className="text-xl font-bold mb-3">Country Name</span>
            <input
              type="text"
              name="country_name"
              defaultValue={country_name}
              placeholder="Enter Country Name"
              className="input input-bordered w-full"
              required
            />
          </label>
          <label className="form-control w-full">
            <span className="text-xl font-bold mb-3">Location</span>
            <input
              type="text"
              name="location"
              defaultValue={location}
              placeholder="Enter Location"
              className="input input-bordered w-full"
              required
            />
          </label>
          <label className="form-control w-full">
            <span className="text-xl font-bold mb-3">Short Description</span>
            <input
              type="text"
              name="short_description"
              defaultValue={short_description}
              placeholder="Enter Write A Description"
              className="input input-bordered w-full"
              required
            />
          </label>
          <label className="form-control w-full">
            <span className="text-xl font-bold mb-3">Avarage Cost</span>
            <input
              type="text"
              name="average_cost"
              defaultValue={average_cost}
              placeholder="Enter Average Cost"
              className="input input-bordered w-full"
              required
            />
          </label>
          <label className="form-control w-full">
            <span className="text-xl font-bold mb-3">Seasonality</span>
            <input
              type="text"
              name="seasonality"
              defaultValue={seasonality}
              placeholder="Enter Seasonality"
              className="input input-bordered w-full"
              required
            />
          </label>
          <label className="form-control w-full">
            <span className="text-xl font-bold mb-3">Travel Time</span>
            <input
              type="text"
              name="travel_time"
              defaultValue={travel_time}
              placeholder="Enter Travel Time"
              className="input input-bordered w-full"
              required
            />
          </label>
          <label className="form-control w-full">
            <span className="text-xl font-bold mb-3">
              Total Visitors Per Year
            </span>
            <input
              type="text"
              name="total_visitors_per_year"
              defaultValue={total_visitors_per_year}
              placeholder="Enter Total Visitors Per Year"
              className="input input-bordered w-full"
              required
            />
          </label>
          <label className="form-control w-full col-span-2">
            <span className="text-xl font-bold mb-3">Photo URL</span>
            <input
              type="text"
              name="image"
              defaultValue={image}
              placeholder="Enter Tourists Spot Photo URL"
              className="input input-bordered w-full"
              required
            />
          </label>
          <label className="form-control w-full">
            <span className="text-xl font-bold mb-3">User Email</span>
            <input
              type="email"
              name="email"
              disabled
              value={user.email}
              className="input input-bordered w-full"
              required
            />
          </label>
          <label className="form-control w-full">
            <span className="text-xl font-bold mb-3">User Name</span>
            <input
              type="text"
              name="name"
              disabled
              value={user.displayName}
              className="input input-bordered w-full"
              required
            />
          </label>

          <input
            className="btn btn-block col-span-2 bg-black text-white hover:bg-slate-900 text-xl"
            type="submit"
            value="Update Tourists Spot"
          />
        </form>
      </div>
    </>
  );
}

export default UpdateTouristsSpot;
