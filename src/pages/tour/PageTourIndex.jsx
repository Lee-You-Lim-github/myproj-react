import Button from "components/Button";
import H1 from "components/H1";
import SpotList from "components/tour/SpotList";
import { useNavigate } from "react-router-dom";

function PageTourIndex() {
  const navigate = useNavigate();
  return (
    <div>
      <H1>국내 여행 Spot</H1>
      <Button onClick={() => navigate(`/tour/new/`)}>New Spot</Button>
      <SpotList />
    </div>
  );
}

export default PageTourIndex;
