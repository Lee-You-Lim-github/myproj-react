import { useNavigate } from "react-router-dom";

function BlogForm() {
  const navigate = useNavigate();
  return (
    <div class="rounded border-2 border-gray-300 p-3 my-3">
      <div className="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2">제목</label>
        <input
          className="shadow appe`arance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="title"
        />
      </div>
      <div className="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2">콘텐츠</label>
        <textarea
          class="shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          name="content"
          cols="30"
          rows="10"
        ></textarea>
      </div>
      <button
        className="shadow border bg-blue-100 hover:bg-blue-300 border-blue-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight"
        onClick={() => navigate(`/blog/`)}
      >
        저장하기
      </button>
    </div>
  );
}
export default BlogForm;
