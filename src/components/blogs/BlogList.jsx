import { useNavigate } from "react-router-dom";

function BlogList({ blog }) {
  const navigate = useNavigate();

  const { id, title } = blog;
  return (
    <div>
      <ul>
        <a onClick={() => navigate(`/blogs/${id}`)}>{title}</a>
      </ul>
    </div>
  );
}
export default BlogList;
