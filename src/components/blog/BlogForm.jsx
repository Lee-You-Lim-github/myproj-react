import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Axios from "axios";

function BlogForm({
  fieldValues,
  handleFieldChange,
  handleSubmit,
  loading,
  errorMessages,
}) {
  // 저장이 안 되었을 경우 !경고!
  const clickedSubmitButton = () => {
    if (handleSubmit) {
      return handleSubmit();
    } else {
      console.warn("handleSubmit 속성값을 지정해주세요.");
    }
  };
  return (
    <div className="rounded border-2 border-gray-300 p-3 my-3">
      {loading && "Loading..."}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          제목
        </label>
        <div>{errorMessages.title}</div>

        <input
          className="shadow appe`arance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="title"
          value={fieldValues.title}
          onChange={(e) => handleFieldChange(e)}
          disabled={loading}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          콘텐츠
        </label>
        <div>{errorMessages.content}</div>
        <textarea
          className="shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          name="content"
          value={fieldValues.content}
          onChange={(e) => handleFieldChange(e)}
          disabled={loading}
        ></textarea>
      </div>
      <button
        className="shadow border bg-blue-100 hover:bg-blue-300 border-blue-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight"
        onClick={() => clickedSubmitButton()}
        disabled={loading}
      >
        {/* {loading && '로딩 아이콘}  */}
        저장하기
      </button>
    </div>
  );
}
export default BlogForm;
