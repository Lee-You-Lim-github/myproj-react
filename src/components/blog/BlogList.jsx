import { useNavigate } from "react-router-dom";

function BlogList({ post }) {
  const navigate = useNavigate();

  const { id, title } = post;
  return (
    <div>
      <ul>
        <li onClick={() => navigate(`/blog/${id}`)}>{title}</li>
      </ul>
    </div>
  );
}
export default BlogList;
