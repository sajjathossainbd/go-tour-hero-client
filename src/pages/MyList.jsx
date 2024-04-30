import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import { useState } from "react";

function MyList() {
  const touristsSpotsData = useLoaderData();

  const [touristSpots, setTouristSpots] = useState(touristsSpotsData);

  console.log(touristsSpotsData);
  
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/tourists-spot/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Coffee has been deleted.", "success");
              const remaining = touristSpots.filter((spot) => spot._id !== id);
              setTouristSpots(remaining);
            }
          });
      }
    });
  };

  return (
    <div>
      <Helmet>
        <title>GoTour Hero - My List</title>
      </Helmet>
      <h2 className="text-4xl mb-8 mt-10 font-bold text-center font-playfair">
        My List
      </h2>
      <div className="">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Name And Location</th>
                <th>Average Cost</th>
                <th>Travel Time</th>
                <th>Location</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {touristSpots.map((touristSpot) => (
                <tr key={touristSpot._id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={touristSpot?.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">
                          {touristSpot?.tourists_spot_name}
                        </div>
                        <div className="text-sm opacity-50">
                          {touristSpot?.country_name}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="badge badge-ghost badge-sm">
                      {touristSpot?.average_cost}
                    </span>
                  </td>
                  <td>{touristSpot?.travel_time}</td>
                  <th>
                    <div className="flex gap-4">
                      <button className="btn btn-accent btn-xs">Update</button>
                      <button
                        className="btn btn-error btn-xs"
                        onClick={() => handleDelete(touristSpot._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default MyList;
