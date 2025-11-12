import React from "react";
import { AuthContext } from "../provider/context";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import LoadingSpinner from "../components/LoadingSpinner";
import { toast } from "react-toastify";
import { format } from "date-fns";

const AddVehicles = () => {
  // const {user} = use(AuthContext)
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const handleAddVehicle = (e) => {
    e.preventDefault();
    const formData = {
      vehicleName: e.target.name.value,
      owner: e.target.ownerName.value,
      category: e.target.category.value,
      pricePerDay: e.target.pricePerDay.value,
      location: e.target.location.value,
      availability: e.target.availability.value,
      seatCapacity: e.target.seatCapacity.value,
      detailsDesc: e.target.description.value,
      coverImage: e.target.thumbnail.value,
      // created_at: new Date(),
      created_at: format(new Date(), "PPPpp"),
      userEmail: user.email,
    };

    // fetch('http://localhost:3000/vehicles',{
    //   method: "POST",
    //   headers:{
    //     'content-type': 'application/json'
    //   },
    //   body: JSON.stringify(formData)
    // })
    // .then(res=>res.json())
    // .then(data=>{
    //   alert('vehicle added successfully')
    //   e.target.reset()
    // })
    // .catch(error=>console.log(error))

    axiosSecure.post("/vehicles", formData).then((data) => {
      console.log("after secure call", data.data);
      toast.success("New vehicle added successfully");
      e.target.reset();
    });
  };
  return (
    <div className="card border border-gray-200 bg-base-100 w-full max-w-md mx-auto shadow-2xl rounded-2xl">
      <div className="card-body p-6 relative">
        <h2 className="text-2xl font-bold text-center mb-6">Add New Vehicle</h2>
        <form onSubmit={handleAddVehicle} className="space-y-4">
          {/*vehicle Name Field */}
          <div>
            <label className="label font-medium">Vehicle Name</label>
            <input
              type="text"
              name="name"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Enter name"
            />
          </div>
          {/* owner name */}
          <div>
            <label className="label font-medium">Owner</label>
            <input
              type="text"
              name="ownerName"
              defaultValue={user.displayName}
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Enter name"
            />
          </div>
          {/* price per day */}
          <div>
            <label className="label font-medium">Price Per Day</label>
            <input
              type="text"
              name="pricePerDay"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Enter Price Per day"
            />
          </div>
          {/* location */}
          <div>
            <label className="label font-medium">Location</label>
            <input
              type="text"
              name="location"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Enter Location"
            />
          </div>
          {/* availability */}
          <div>
            <label className="label font-medium">Availability</label>
            <input
              type="text"
              name="availability"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Availability"
            />
          </div>
          {/* seatCapacity */}
          <div>
            <label className="label font-medium">Seat Capacity</label>
            <input
              type="text"
              name="seatCapacity"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="seatCapacity"
            />
          </div>

          {/* Category Dropdown */}
          <div>
            <label className="label font-medium">Category</label>
            <select
              defaultValue={""}
              name="category"
              required
              className="select w-full rounded-full focus:border-0 focus:outline-gray-200"
            >
              <option value="" disabled>
                Select category
              </option>
              <option value="SUV">SUV</option>
              <option value="Bus">Bus</option>
              <option value="Sedan">Sedan</option>
              <option value="Van">Van</option>
              <option value="Electrics">Electrics</option>
            </select>
          </div>

          {/* Description Textarea */}
          <div>
            <label className="label font-medium">Description</label>
            <textarea
              name="description"
              required
              rows="3"
              className="textarea w-full rounded-2xl focus:border-0 focus:outline-gray-200 h-[250px]"
              placeholder="Enter description"
            ></textarea>
          </div>
          {/* email */}
          <div>
            <label className="label font-medium">Email</label>
            <input
              type="email"
              name="email"
              defaultValue={user.email}
              readOnly
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Enter email"
            />
          </div>
          {/* created at */}

          {/* Thumbnail URL */}
          <div>
            <label className="label font-medium">Thumbnail URL</label>
            <input
              type="url"
              name="thumbnail"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="https://example.com/image.jpg"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn w-full text-white mt-6 rounded-full btn_common  hover:to-red-700"
          >
            Add Vehicle
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddVehicles;
