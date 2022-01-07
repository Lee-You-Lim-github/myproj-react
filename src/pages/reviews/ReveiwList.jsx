import Axios from "axios";
import DebugStates from "components/DebugStates";
import Review from "components/Review";
import { useEffect, useState } from "react";

function PageReviewList() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [reviewList, setReviewList] = useState([]);

  useEffect(() => {
    refetch();
  }, []);

  const refetch = () => {
    setLoading(true);
    setError(null);

    const url = "http://127.0.0.1:8000/shop/api/reviews/";
    // Promis 객체
    Axios.get(url)
      // 400 이하
      .then(({ data }) => {
        setReviewList(data);
      })
      // 400 이상
      .catch((error) => {
        console.group("에러 응답");
        console.log(error);
        console.groupEnd();
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <h2>Review List</h2>

      {loading && <div>Loading...</div>}
      {error && <div>통신 중에 오류가 발생했습니다.</div>}

      <button className="bg-yellow-300 hover:bg-red-300">새로고침</button>
      <div>
        {reviewList.map((review) => (
          <Review key={review.id} review={review} />
        ))}
      </div>

      <hr />
      <DebugStates loading={loading} error={error} reviewList={reviewList} />
    </div>
  );
}
export default PageReviewList;
