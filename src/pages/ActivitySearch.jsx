import { useState } from "react";

const activities = [
  {
    id: 1,
    name: "Eiffel Tower Visit",
    city: "Paris",
    type: "Sightseeing",
    duration: "3 hours",
    cost: 2500,
  },
  {
    id: 2,
    name: "Food Tour",
    city: "Paris",
    type: "Food",
    duration: "2 hours",
    cost: 1800,
  },
  {
    id: 3,
    name: "Scuba Diving",
    city: "Goa",
    type: "Adventure",
    duration: "4 hours",
    cost: 3000,
  },
  {
    id: 4,
    name: "Desert Safari",
    city: "Dubai",
    type: "Adventure",
    duration: "6 hours",
    cost: 4500,
  },
];

function ActivitySearch() {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("All");

  const filteredActivities = activities.filter((activity) => {
    const matchesSearch = activity.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesType =
      type === "All" || activity.type === type;

    return matchesSearch && matchesType;
  });

  return (
    <div className="page">
      <h1>Discover Activities 🎯</h1>

      <div className="filters">
        <input
          placeholder="Search activities..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option>All</option>
          <option>Sightseeing</option>
          <option>Food</option>
          <option>Adventure</option>
        </select>
      </div>

      <div className="activity-grid">
        {filteredActivities.map((activity) => (
          <div
            className="activity-card"
            key={activity.id}
          >
            <h2>{activity.name}</h2>

            <p>📍 {activity.city}</p>
            <p>🏷️ {activity.type}</p>
            <p>⏱️ {activity.duration}</p>
            <p>💰 ₹{activity.cost}</p>

            <button
              onClick={() =>
                alert("Activity added!")
              }
            >
              Add Activity
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActivitySearch;