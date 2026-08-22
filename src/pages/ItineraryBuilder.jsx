import { useState } from "react";
import { useParams } from "react-router-dom";

function ItineraryBuilder() {
  const { tripId } = useParams();

  const [stops, setStops] = useState([
    {
      city: "Paris",
      startDate: "2026-06-10",
      endDate: "2026-06-13",
      activities: [],
    },
  ]);

  const addStop = () => {
    setStops([
      ...stops,
      {
        city: "",
        startDate: "",
        endDate: "",
        activities: [],
      },
    ]);
  };

  const updateStop = (index, field, value) => {
    const updated = [...stops];

    updated[index][field] = value;

    setStops(updated);
  };

  const addActivity = (index) => {
    const activity = prompt("Enter activity name");

    if (!activity) return;

    const updated = [...stops];

    updated[index].activities.push(activity);

    setStops(updated);
  };

  const removeStop = (index) => {
    setStops(stops.filter((_, i) => i !== index));
  };

  const saveItinerary = () => {
    console.log("Trip ID:", tripId);
    console.log(stops);

    alert("Itinerary saved!");
  };

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1>Itinerary Builder</h1>
          <p>Create your multi-city travel plan.</p>
        </div>

        <button onClick={addStop}>
          + Add Stop
        </button>
      </div>

      {stops.map((stop, index) => (
        <div className="stop-card" key={index}>
          <div className="stop-header">
            <h2>Stop {index + 1}</h2>

            <button onClick={() => removeStop(index)}>
              Remove
            </button>
          </div>

          <label>City</label>

          <input
            placeholder="Enter city"
            value={stop.city}
            onChange={(e) =>
              updateStop(index, "city", e.target.value)
            }
          />

          <div className="date-row">
            <div>
              <label>Start Date</label>
              <input
                type="date"
                value={stop.startDate}
                onChange={(e) =>
                  updateStop(
                    index,
                    "startDate",
                    e.target.value
                  )
                }
              />
            </div>

            <div>
              <label>End Date</label>
              <input
                type="date"
                value={stop.endDate}
                onChange={(e) =>
                  updateStop(
                    index,
                    "endDate",
                    e.target.value
                  )
                }
              />
            </div>
          </div>

          <h3>Activities</h3>

          {stop.activities.map((activity, activityIndex) => (
            <div className="activity-item" key={activityIndex}>
              {activity}
            </div>
          ))}

          <button onClick={() => addActivity(index)}>
            + Add Activity
          </button>
        </div>
      ))}

      <button
        className="primary-btn"
        onClick={saveItinerary}
      >
        Save Itinerary
      </button>
    </div>
  );
}

export default ItineraryBuilder;