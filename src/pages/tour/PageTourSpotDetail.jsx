import H1 from "components/H1";
import SpotDetail from "components/tour/SpotDetail";
import { useParams } from "react-router-dom";

function PageTourSpotDetail() {
  const { spotId } = useParams();
  return (
    <div>
      <H1>{`${spotId}번 째 Spot`}</H1>
      <SpotDetail spotId={spotId} />
    </div>
  );
}

export default PageTourSpotDetail;
