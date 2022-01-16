import { useApiAxios } from "api/base";
import Button from "components/Button";
import DebugStates from "components/DebugStates";
import LoadingIndicator from "components/LoadingIndicator";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SpotDetail({ spotId }) {
  const navigate = useNavigate();

  const [
    { data: spotDetail, loading: spotDetailLoading, error: spotDetailError },
    refetch,
  ] = useApiAxios(`/tour/api/spots/${spotId}/`, { manual: true });

  useEffect(() => {
    refetch();
  }, []);

  // 삭제
  const [{ loading: deletingLoading, error: deletingError }, deletedSpot] =
    useApiAxios(
      {
        url: `/tour/api/spots/${spotId}/`,
        method: "DELETE",
      },
      { manual: true }
    );

  const handleDelete = () => {
    deletedSpot().then(() => navigate(`/tour/`));
  };

  return (
    <div>
      {spotDetailLoading && <LoadingIndicator>로딩 중...</LoadingIndicator>}
      {spotDetailError && "에러가 났어요!"}
      {deletingLoading && <LoadingIndicator>삭제 중...</LoadingIndicator>}
      {deletingError && "삭제 중 에러가 났어요!"}
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
      <hr />
      <div>
        <Button onClick={() => navigate(`/tour/`)}>목록으로</Button>
      </div>
      <div>
        <Button onClick={() => navigate(`/tour/${spotId}/edit/`)}>수정</Button>
        <Button onClick={handleDelete}>삭제</Button>
      </div>

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
