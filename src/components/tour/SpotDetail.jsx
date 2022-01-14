import { useApiAxios } from "api/base";
import DebugStates from "components/DebugStates";
import { useEffect } from "react";

function SpotDetail({ spotId }) {
  const [
    { data: spotDetail, loading: spotDetailLoading, error: spotDetailError },
    refetch,
  ] = useApiAxios(`/tour/api/spots/${spotId}/`, { manual: true });

  useEffect(() => {
    refetch();
  }, []);

  return (
    <div>
      {spotDetail && (
        <div>
          <ul>
            <li>{spotDetail.area}</li>
            <li>{spotDetail.destination}</li>
            <li>{spotDetail.content}</li>
            <li>
              <img src={spotDetail.photo} alt={spotDetail.destination} />
            </li>
          </ul>
        </div>
      )}

      <DebugStates
        spotId={spotId}
        spotDetail={spotDetail}
        spotDetailLoading={spotDetailLoading}
        spotDetailError={spotDetailError}
      />
    </div>
  );
}

export default SpotDetail;
