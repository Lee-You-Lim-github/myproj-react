import { Link } from "react-router-dom";

function SpotSummary({ spot }) {
  return (
    <div>
      {/* ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ */}
      <section class="text-gray-600 body-font">
        <div class="bg-white p-6 rounded-lg">
          <Link to={`/tour/${spot.id}/`}>
            <img
              class="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72  rounded w-full object-cover object-center mb-6"
              src={spot.photo}
              alt={spot.destination}
            />
          </Link>
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
            {`#${spot.id} Spot`}
          </h3>
          <Link to={`/tour/${spot.id}/`}>
            <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
              {spot.destination}
            </h2>
          </Link>
        </div>
      </section>
      {/* ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ */}
    </div>
  );
}

export default SpotSummary;
