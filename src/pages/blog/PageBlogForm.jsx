import BlogForm from "components/blog/BlogForm";
import DebugStates from "components/DebugStates";
import useFieldValues from "hooks/useFieldValues";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { axiosInstance } from "api/base";

const INIT_FIELD_VALUES = { title: "", content: "" };

function PageBlogForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { postId } = useParams();
  const navigate = useNavigate();

  const { fieldValues, handleFieldChange, clearFieldValues, setFieldValues } =
    useFieldValues(INIT_FIELD_VALUES);

  const [errorMessages, setErrorMessages] = useState({});

  // 수정값 읽어 옴.
  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      setError(null);

      const url = `/blog/api/posts/${postId}/`;

      try {
        const response = await axiosInstance.get(url);
        setFieldValues(response.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    if (postId) fetchPost();
    else clearFieldValues();

    // useCallback으로 clearFieldValues()의 반복을 없앰  --> 값의 변경을 최소화
  }, [postId, setFieldValues, clearFieldValues]);

  // 값 저장
  const savePost = async () => {
    // 통신 중
    setLoading(true);
    setError(null);
    setErrorMessages({});

    const url = !postId ? `/blog/api/posts/` : `/blog/api/posts/${postId}/`;

    try {
      if (!postId) {
        await axiosInstance.post(url, fieldValues);
      } else {
        await axiosInstance.put(url, fieldValues);
      }
      navigate(`/blog/`);
    } catch (e) {
      setError(e);
      console.log(e);
      console.error(e.response);

      setErrorMessages(e.response.data);
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
        errorMessages={errorMessages}
      />
      <DebugStates
        postId={postId}
        fieldValues={fieldValues}
        errorMessages={errorMessages}
      />
    </div>
  );
}
export default PageBlogForm;
