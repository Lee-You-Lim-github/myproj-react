import { Link } from "react-router-dom";

function DiaryPostSummary({ post }) {
  const time = post.created_at;
  return (
    <div>
      <div>{time.slice(0, 10)}</div>
      <Link to={`/diary/${post.id}/`}>
        <div>{post.title}</div>
      </Link>
    </div>
  );
}

export default DiaryPostSummary;
