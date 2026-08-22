import { Link } from "react-router-dom";

const trips = [
  {
    id: 1,
    name: "European Adventure",
    start: "2026-06-10",
    end: "2026-06-25",
    cities: 5,
  },
  {
    id: 2,
    name: "Goa Vacation",
    start: "2026-07-15",
    end: "2026-07-20",
    cities: 2,
  },
];

function MyTrips() {
  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1>My Trips</h1>
          <p>Manage all your travel plans.</p>
        </div>

        <Link to="/create-trip" className="primary-btn">
          + Create Trip
        </Link>
      </div>

      <div className="trip-grid">
        {trips.map((trip) => (
          <div className="trip-card" key={trip.id}>
            <h2>{trip.name}</h2>

            <p>
              {trip.start} → {trip.end}
            </p>

            <p>{trip.cities} destinations</p>

            <div className="card-actions">
              <Link to={`/trips/${trip.id}`}>
                View
              </Link>

              <Link to={`/trips/${trip.id}/builder`}>
                Edit
              </Link>

              <button
                onClick={() => alert("Trip deleted")}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyTrips;