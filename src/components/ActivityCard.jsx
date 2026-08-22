import {
  MapPin,
  Clock,
  IndianRupee,
} from "lucide-react";

function ActivityCard({ activity, onAdd }) {
  return (
    <div className="activity-card">

      <div className="activity-image">
        🎯
      </div>

      <h2>{activity.name}</h2>

      <p>
        <MapPin size={17} />
        {activity.city}
      </p>

      <p>
        Type: {activity.type}
      </p>

      <p>
        <Clock size={17} />
        {activity.duration}
      </p>

      <p>
        <IndianRupee size={17} />
        {Number(activity.cost).toLocaleString()}
      </p>

      <button onClick={() => onAdd && onAdd(activity)}>
        Add Activity
      </button>

    </div>
  );
}

export default ActivityCard;