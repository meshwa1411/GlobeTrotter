import { MapPin, Star } from "lucide-react";

function CityCard({ city, onAdd }) {
  return (
    <div className="city-card">

      <div className="city-image">
        <MapPin size={45} />
      </div>

      <h2>{city.name}</h2>

      <p>
        {city.country}
      </p>

      <p>
        Region: {city.region}
      </p>

      <div className="city-rating">
        <Star size={16} />
        Popularity: {city.popularity}%
      </div>

      <p>
        Cost Index: {city.costIndex}
      </p>

      <button onClick={() => onAdd && onAdd(city)}>
        Add to Trip
      </button>

    </div>
  );
}

export default CityCard;