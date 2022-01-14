import H1 from "components/H1";
import SpotDetail from "components/tour/SpotDetail";
import { useParams } from "react-router-dom";

function PageTourSpotDetail() {
  const { spotId } = useParams();
  return (
    <div>
      <H1>{`${spotId}번째 여행지`}</H1>
      <SpotDetail spotId={spotId} />
    </div>
  );
}

export default PageTourSpotDetail;
