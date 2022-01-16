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
        <div class="sm:flex items-center shadow-md ">
          <div class="md:px-10 sm:px-5">
            <h1 class="text-gray-800 font-bold text-2xl my-2">
              {spotDetail.destination}
            </h1>
            <p class="text-gray-700 mb-2 md:mb-6">{spotDetail.content}</p>
            <div class="flex justify-between mb-2">
              <span class="font-thin text-sm">{spotDetail.created_at}</span>
              <span class="sm:block hidden mb-2 text-gray-800 font-bold">
                {spotDetail.area}
              </span>
            </div>
          </div>
          <div>
            <img
              class="bg-cover  rounded w-full "
              src={spotDetail.photo}
              alt=""
            />
          </div>
        </div>
      )}

      <div>
        <button
          className="hover:text-red-400 mr-3"
          onClick={() => navigate(`/tour/`)}
        >
          목록으로
        </button>

        <button
          className="hover:text-red-400 mr-3"
          onClick={() => navigate(`/tour/${spotId}/edit/`)}
        >
          수정
        </button>
        <button className="hover:text-red-400 mr-3" onClick={handleDelete}>
          삭제
        </button>
      </div>
    </div>
  );
}

export default SpotDetail;
