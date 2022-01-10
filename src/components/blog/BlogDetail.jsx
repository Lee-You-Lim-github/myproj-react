import DebugStates from "components/DebugStates";
import { useNavigate } from "react-router-dom";

function BlogDetail({ post }) {
  const { title, content, created_at } = post;

  const navigate = useNavigate();

  return (
    <div>
      <h2 className="text-blue-400 border-b-2 border-blue-300">Blog Detail</h2>
      <ul>
        <li>{title}</li>
        <li>{content}</li>
        <li>포스팅 시간: {created_at}</li>
      </ul>
      <button
        className="shadow border bg-blue-100 hover:bg-blue-300 border-blue-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight"
        onClick={() => navigate(`/blog/`)}
      >
        블로그 목록
      </button>
      <DebugStates post={post} />
    </div>
  );
}

export default BlogDetail;
