import { Link } from "react-router-dom";

const itinerary = [
  {
    day: "Day 1",
    date: "10 June",
    city: "Paris",
    activities: [
      {
        time: "10:00 AM",
        name: "Eiffel Tower",
        cost: 2500,
      },
      {
        time: "04:00 PM",
        name: "Seine River Cruise",
        cost: 1800,
      },
    ],
  },
  {
    day: "Day 2",
    date: "11 June",
    city: "Paris",
    activities: [
      {
        time: "09:00 AM",
        name: "Louvre Museum",
        cost: 2000,
      },
    ],
  },
];

function ItineraryView() {
  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1>European Adventure</h1>
          <p>10 June - 25 June 2026</p>
        </div>

        <div>
          <Link to="/trips/1/builder">
            Edit Itinerary
          </Link>

          {" "}

          <Link to="/trips/1/budget">
            Budget
          </Link>

          {" "}

          <Link to="/trips/1/calendar">
            Calendar
          </Link>
        </div>
      </div>

      {itinerary.map((day) => (
        <div className="day-card" key={day.day}>
          <div className="day-header">
            <div>
              <h2>{day.day}</h2>
              <p>{day.date}</p>
            </div>

            <h3>📍 {day.city}</h3>
          </div>

          {day.activities.map((activity) => (
            <div className="activity-row" key={activity.name}>
              <span>{activity.time}</span>

              <div>
                <h3>{activity.name}</h3>
                <p>Estimated cost: ₹{activity.cost}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default ItineraryView;