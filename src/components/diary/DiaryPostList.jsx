import DiaryPostSummary from "./DiaryPostSummary";
import { useApiAxios } from "api/base";
import DebugStates from "components/DebugStates";
import { useEffect } from "react/cjs/react.development";

function DiaryPostList() {
  const [
    { data: diaryPostSummary, loading: summaryLoading, error: summaryError },
    refetch,
  ] = useApiAxios("/diary/api/posts/", { manual: true });

  useEffect(() => {
    refetch();
  }, []);

  return (
    <div>
      <h2>DiaryPostList</h2>
      <hr />
      {diaryPostSummary &&
        diaryPostSummary.map((post) => <DiaryPostSummary post={post} />)}
      <DebugStates diaryPostSummary={diaryPostSummary} />
    </div>
  );
}

export default DiaryPostList;
