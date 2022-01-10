import { useNavigate } from "react-router-dom";

function BlogList({ post, handleDelete, handleEdit }) {
  const navigate = useNavigate();

  const { id, title } = post;
  return (
    <div>
      <ul className="bg-yellow-100 my-1 p-1 pt-3 border-2 border-green-600  relative">
        <span
          className="hover:text-blue-500 curser-pointer mr-1"
          onClick={() => handleEdit()}
        >
          수정
        </span>
        <span
          className="hover:text-red-400 curser-pointer mr-1"
          onClick={() => handleDelete()}
        >
          삭제
        </span>
        <li onClick={() => navigate(`/blog/${id}`)}>{title}</li>
      </ul>
    </div>
  );
}
export default BlogList;
