import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DebugStates from "components/DebugStates";
import useFieldValues from "hooks/useFieldValues";
import ReviewForm from "components/ReveiwForm";
import { axiosInstance } from "api/base";

function PageReviewForm() {
  // 상탯값 정의. 훅 호출
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const { reviewId } = useParams();
  const { fieldValues, handleFieldChange, clearFieldValues, setFieldValues } =
    useFieldValues({
      score: 5,
      content: "",
    });

  // 에러 메세지
  const [errorMessages, setErrorMessages] = useState([]);

  useEffect(() => {
    const fetchReview = async () => {
      setLoading(false);
      setError(null);
      setErrorMessages({});

      const url = `/shop/api/reviews/${reviewId}/`;

      try {
        const response = await axiosInstance.get(url);
        setFieldValues(response.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    if (reviewId) fetchReview();
    else clearFieldValues();
  }, [reviewId, setFieldValues, clearFieldValues]);

  // 다양한 함수 정의
  const saveReview = async () => {
    setLoading(true);
    setError(null);

    const url = !reviewId
      ? `/shop/api/reviews/`
      : `/shop/api/reviews/${reviewId}/`;

    try {
      if (!reviewId) {
        await axiosInstance.post(url, fieldValues);
      } else {
        await axiosInstance.put(url, fieldValues);
      }
      navigate("/reviews/");
    } catch (e) {
      setError(e);
      console.error(e);

      setErrorMessages(e.response.data);
    }
    setLoading(false);
  };

  // 표현 by jsx
  return (
    <div>
      <h2>Review Form</h2>
      <h2>{reviewId ? "수정" : "생성"}</h2>

      <ReviewForm
        fieldValues={fieldValues}
        handleFieldChange={handleFieldChange}
        handleSubmit={(e) => saveReview(e)}
        loading={loading}
        errorMessages={errorMessages}
      />
      <DebugStates
        reviewId={reviewId}
        fieldValues={fieldValues}
        errorMessages={errorMessages}
      />
    </div>
  );
}

export default PageReviewForm;
