import { useNavigate } from "react-router-dom";
import DebugStates from "components/DebugStates";
import { useState } from "react";
import Axios from "axios";

function BlogForm() {
  const [fieldValues, setFieldValues] = useState({ title: "", content: "" });
  const navigate = useNavigate();

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setFieldValues((prevFieldValues) => ({
      ...prevFieldValues,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const url = "http://127.0.0.1:8000/blog/api/posts/";

    Axios.post(url, fieldValues)
      .then(() => navigate(`/blog/`))
      .catch((error) => console.error(error));
  };

  return (
    <div className="rounded border-2 border-gray-300 p-3 my-3">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          제목
        </label>
        <input
          className="shadow appe`arance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="title"
          value={fieldValues.title}
          onChange={(e) => handleFieldChange(e)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          콘텐츠
        </label>
        <textarea
          className="shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          name="content"
          value={fieldValues.content}
          onChange={(e) => handleFieldChange(e)}
        ></textarea>
      </div>
      <button
        className="shadow border bg-blue-100 hover:bg-blue-300 border-blue-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight"
        onClick={handleSubmit}
      >
        저장하기
      </button>
      <DebugStates fieldValues={fieldValues} />
    </div>
  );
}
export default BlogForm;
