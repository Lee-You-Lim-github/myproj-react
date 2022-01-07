import Axios from "axios";
import { useEffect } from "react";

function ReviewList() {
  useEffect(() => {
    refetch();
  }, []);

  const refetch = () => {
    const url = "http://127.0.0.1:8000/shop/api/reviews/";
    // Promis 객체
    Axios.get(url)
      // 400 이하
      .then((response) => {
        console.group("정상 응답");
        console.log(response);
        console.groupEnd();
      })
      // 400 이상
      .catch((error) => {
        console.group("에러 응답");
        console.log(error);
        console.groupEnd();
      });
  };

  return (
    <div>
      <h2>Review List</h2>
    </div>
  );
}
export default ReviewList;
