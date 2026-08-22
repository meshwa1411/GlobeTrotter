import { Link } from "react-router-dom";
import { MapPin, Plus, CalendarDays, Wallet } from "lucide-react";

const trips = [
  {
    id: 1,
    name: "European Adventure",
    dates: "10 June - 25 June",
    cities: 5,
    budget: 120000,
  },
  {
    id: 2,
    name: "Goa Trip",
    dates: "15 July - 20 July",
    cities: 2,
    budget: 25000,
  },
];

const destinations = [
  "Paris",
  "Dubai",
  "Tokyo",
  "Goa",
  "London",
  "Bali",
];

function Dashboard() {
  return (
    <div className="page">
      <section className="hero">
        <div>
          <h1>Plan Your Next Adventure 🌍</h1>
          <p>
            Create beautiful itineraries, discover destinations,
            and manage your travel budget.
          </p>

          <Link to="/create-trip" className="primary-btn">
            <Plus size={20} />
            Plan New Trip
          </Link>
        </div>
      </section>

      <h2>Upcoming Trips</h2>

      <div className="trip-grid">
        {trips.map((trip) => (
          <div className="trip-card" key={trip.id}>
            <h3>{trip.name}</h3>

            <p>
              <CalendarDays size={17} />
              {trip.dates}
            </p>

            <p>
              <MapPin size={17} />
              {trip.cities} Cities
            </p>

            <p>
              <Wallet size={17} />
              ₹{trip.budget.toLocaleString()}
            </p>

            <Link to={`/trips/${trip.id}`}>
              View Trip →
            </Link>
          </div>
        ))}
      </div>

      <h2>Popular Destinations</h2>

      <div className="destination-grid">
        {destinations.map((destination) => (
          <div className="destination-card" key={destination}>
            <MapPin />
            <h3>{destination}</h3>
            <p>Explore destination</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;