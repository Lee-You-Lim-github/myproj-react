import Button from "components/Button";
import H1 from "components/H1";
import SpotList from "components/tour/SpotList";
import { useNavigate } from "react-router-dom";

function PageTourIndex() {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="sm:text-4xl text-5xl font-medium font-bold title-font mb-2 text-gray-900">
        국내 Hot Spot
      </h1>
      <div class="h-1 w-60 bg-indigo-500 rounded mb-3"></div>
      <Button onClick={() => navigate(`/tour/new/`)}>New Spot</Button>
      <SpotList />
    </div>
  );
}

export default PageTourIndex;
