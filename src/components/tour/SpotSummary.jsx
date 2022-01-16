import { Link } from "react-router-dom";

function SpotSummary({ spot }) {
  return (
    <div>
      <div>{`#${spot.id} Spot`}</div>
      <div>{spot.area}</div>
      <Link to={`/tour/${spot.id}/`}>
        <div>{spot.destination}</div>
        <div>
          {spot.photo && (
            <img
              src={spot.photo}
              alt={spot.destination}
              className="w-10 h-10"
            />
          )}
        </div>
      </Link>
    </div>
  );
}

export default SpotSummary;
