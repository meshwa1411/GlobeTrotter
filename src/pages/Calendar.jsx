const days = [
  {
    date: "10 June 2026",
    city: "Paris",
    activities: [
      "Eiffel Tower",
      "Seine River Cruise",
    ],
  },
  {
    date: "11 June 2026",
    city: "Paris",
    activities: [
      "Louvre Museum",
      "Notre Dame",
    ],
  },
  {
    date: "12 June 2026",
    city: "Amsterdam",
    activities: [
      "Canal Tour",
      "Van Gogh Museum",
    ],
  },
];

function Calendar() {
  return (
    <div className="page">
      <h1>Trip Calendar 📅</h1>

      <div className="timeline">
        {days.map((day, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-date">
              {day.date}
            </div>

            <div className="timeline-content">
              <h2>📍 {day.city}</h2>

              {day.activities.map((activity) => (
                <div
                  className="timeline-activity"
                  key={activity}
                >
                  {activity}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calendar;