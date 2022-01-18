import { useApiAxios } from "api/base";
import DebugStates from "components/DebugStates";
import { useParams } from "react-router-dom";

function DiartyPostDetail() {
  const { diaryPostId } = useParams();
  const [
    {
      data: diaryPostDetail,
      loading: postDetailLoading,
      error: postDetailError,
    },
  ] = useApiAxios(`/diary/api/posts/${diaryPostId}/`, { manual: true });
  return (
    <div>
      <h2>DiartyPostDetail</h2>
      {diaryPostDetail &&
        diaryPostDetail.map((post) => (
          <div>
            <ul>
              <li>{post.title}</li>
              <li>{post.content}</li>
            </ul>
          </div>
        ))}

      <hr />
      <DebugStates
        diaryPostDetail={diaryPostDetail}
        postDetailError={postDetailError}
        postDetailLoading={postDetailLoading}
      />
    </div>
  );
}

export default DiartyPostDetail;
