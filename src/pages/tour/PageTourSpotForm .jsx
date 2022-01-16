import SpotForm from "components/tour/SpotForm";
import { useNavigate, useParams } from "react-router-dom";

function PageTourSpotForm() {
  const { spotId } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h2>추천 여행지 작성</h2>

      <SpotForm
        spotId={spotId}
        handleDidSave={(savedSpot) => navigate(`/tour/${savedSpot.id}`)}
      />
    </div>
  );
}

export default PageTourSpotForm;
