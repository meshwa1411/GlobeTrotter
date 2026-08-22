import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateTrip() {
  const navigate = useNavigate();

  const [trip, setTrip] = useState({
    name: "",
    startDate: "",
    endDate: "",
    description: "",
  });

  const handleChange = (e) => {
    setTrip({
      ...trip,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!trip.name || !trip.startDate || !trip.endDate) {
      alert("Please fill required fields");
      return;
    }

    console.log(trip);

    alert("Trip created successfully!");

    navigate("/my-trips");
  };

  return (
    <div className="form-page">
      <div className="form-card">
        <h1>Create New Trip</h1>

        <form onSubmit={handleSubmit}>
          <label>Trip Name</label>
          <input
            name="name"
            placeholder="e.g. Europe Summer Trip"
            value={trip.name}
            onChange={handleChange}
          />

          <label>Start Date</label>
          <input
            type="date"
            name="startDate"
            value={trip.startDate}
            onChange={handleChange}
          />

          <label>End Date</label>
          <input
            type="date"
            name="endDate"
            value={trip.endDate}
            onChange={handleChange}
          />

          <label>Description</label>
          <textarea
            name="description"
            placeholder="Describe your trip..."
            value={trip.description}
            onChange={handleChange}
          />

          <label>Cover Photo</label>
          <input type="file" accept="image/*" />

          <button>Create Trip</button>
        </form>
      </div>
    </div>
  );
}

export default CreateTrip;