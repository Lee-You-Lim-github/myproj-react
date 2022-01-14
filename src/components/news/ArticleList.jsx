import { useApiAxios } from "api/base";
import DebugStates from "components/DebugStates";
import { useEffect } from "react";
import ArticleSummary from "./ArticleSummary";

function ArticleList() {
  const [{ data: articleList, loading, error }, refetch] = useApiAxios(
    "/news/api/articles/",
    { manual: true }
  );

  useEffect(() => {
    refetch();
  }, []);

  return (
    <div>
      <h3>뉴스 기사 목록을 보여줄 것입니다.</h3>
      {loading && "로딩 중...."}
      {error && "로딩 중 에러가 발생했습니다."}
      {articleList &&
        articleList.map((article) => (
          <div
            key={article.id}
            className="w-full md:w-1/2 xl:w-1/3 px-4 transition-transform hover:-translate-y-1"
          >
            <ArticleSummary article={article} />
          </div>
        ))}
      <DebugStates articleList={articleList} loading={loading} error={error} />
    </div>
  );
}

export default ArticleList;
