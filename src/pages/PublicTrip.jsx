import { useParams } from "react-router-dom";

function PublicTrip() {
  const { tripId } = useParams();

  return (
    <div className="public-trip">
      <div className="public-header">
        <h1>European Adventure 🌍</h1>

        <p>
          A 15-day journey across Europe
        </p>

        <p>Trip ID: {tripId}</p>

        <button
          onClick={() =>
            navigator.clipboard.writeText(
              window.location.href
            )
          }
        >
          Copy Trip Link
        </button>
      </div>

      <div className="public-itinerary">
        <h2>Itinerary</h2>

        <div className="public-day">
          <h3>Day 1 — Paris</h3>
          <p>Eiffel Tower</p>
          <p>Seine River Cruise</p>
        </div>

        <div className="public-day">
          <h3>Day 2 — Paris</h3>
          <p>Louvre Museum</p>
        </div>
      </div>

      <button
        onClick={() =>
          alert("Trip copied to your account!")
        }
      >
        Copy This Trip
      </button>
    </div>
  );
}

export default PublicTrip;