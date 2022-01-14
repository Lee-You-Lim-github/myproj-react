import { Link } from "react-router-dom";

function SpotSummary({ spot }) {
  return (
    <div>
      <div>{spot.area}</div>
      <Link to={`/tour/${spot.id}/`}>
        <div>{spot.destination}</div>
        <div>
          <img src={spot.photo} alt={spot.destination} />
        </div>
      </Link>
    </div>
  );
}

export default SpotSummary;
