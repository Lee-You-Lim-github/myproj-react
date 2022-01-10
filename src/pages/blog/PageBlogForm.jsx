import Axios from "axios";
import BlogForm from "components/blog/BlogForm";
import DebugStates from "components/DebugStates";
import useFieldValues from "hooks/useFieldValues";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function PageBlogForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { postId } = useParams();
  const navigate = useNavigate();

  const { fieldValues, handleFieldChange, setFieldValues } = useFieldValues({
    title: "",
    content: "",
  });

  // 수정값 읽어 옴.
  useEffect(() => {
    const fn = async () => {
      setLoading(true);
      setError(null);

      const url = `http://127.0.0.1:8000/blog/api/posts/${postId}`;

      try {
        const response = await Axios.get(url);
        setFieldValues(response.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    fn();
  }, [postId, setFieldValues]);

  // 값 저장
  const savePost = async () => {
    // 통신 중
    setLoading(true);
    setError(null);

    const url = "http://127.0.0.1:8000/blog/api/posts/";

    try {
      await Axios.post(url, fieldValues);
      navigate(`/blog/`);
    } catch (e) {
      setError(e);
      console.error(e);
    }
    // 통신이 끝난 후
    // async()에는 finally가 없음.
    setLoading(false);
  };

  return (
    <div>
      <h2 className="text-green-400 border-b-2 border-green-300">
        Blog Form {postId ? "수정" : "생성"}
      </h2>
      <BlogForm
        fieldValues={fieldValues}
        handleFieldChange={handleFieldChange}
        handleSubmit={(e) => savePost(e)}
        loading={loading}
      />
      <DebugStates fieldValues={fieldValues} />
    </div>
  );
}
export default PageBlogForm;
