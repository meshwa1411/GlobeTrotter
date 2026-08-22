import { Link } from "react-router-dom";
import {
  CalendarDays,
  MapPin,
  Wallet,
  Edit,
  Trash2,
} from "lucide-react";

function TripCard({ trip, onDelete }) {
  return (
    <div className="trip-card">

      <div className="trip-card-image">
        🌍
      </div>

      <h2>{trip.name}</h2>

      <p>
        <CalendarDays size={17} />
        {trip.startDate} → {trip.endDate}
      </p>

      <p>
        <MapPin size={17} />
        {trip.cities || 0} destinations
      </p>

      <p>
        <Wallet size={17} />
        ₹{Number(trip.budget || 0).toLocaleString()}
      </p>

      <div className="card-actions">

        <Link to={`/trips/${trip.id}`}>
          View
        </Link>

        <Link to={`/trips/${trip.id}/builder`}>
          <Edit size={17} />
          Edit
        </Link>

        <button
          onClick={() => onDelete && onDelete(trip.id)}
          className="delete-button"
        >
          <Trash2 size={17} />
        </button>

      </div>

    </div>
  );
}

export default TripCard;