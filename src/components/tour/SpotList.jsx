import { useApiAxios } from "api/base";
import DebugStates from "components/DebugStates";
import LoadingIndicator from "components/LoadingIndicator";
import { useEffect } from "react";
import SpotSummary from "./SpotSummary";

function SpotList() {
  const [{ data: spotList, loading: listLoading, error: listError }, refetch] =
    useApiAxios(`/tour/api/spots/`, { manual: true });

  useEffect(() => {
    refetch();
  }, []);

  return (
    <div>
      {listLoading && <LoadingIndicator></LoadingIndicator>}
      {listError && "로딩 중 에러가 발생했습니다."}

      {spotList &&
        spotList.map((spot) => <SpotSummary key={spot.id} spot={spot} />)}

      <DebugStates
        spotList={spotList}
        listLoading={listLoading}
        listError={listError}
      />
    </div>
  );
}

export default SpotList;
