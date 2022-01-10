import Axios from "axios";
import BlogForm from "components/blog/BlogForm";
import DebugStates from "components/DebugStates";
import useFieldValues from "hooks/useFieldValues";
import { useNavigate, useParams } from "react-router-dom";

function PageBlogForm() {
  const { postId } = useParams();

  const { fieldValues, handleFieldChange } = useFieldValues({
    title: "",
    content: "",
  });

  const navigate = useNavigate();

  const savePost = () => {
    const url = "http://127.0.0.1:8000/blog/api/posts/";

    Axios.post(url, fieldValues)
      .then(() => navigate(`/blog/`))
      .catch((error) => console.error(error));
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
      />
      <DebugStates fieldValues={fieldValues} />
    </div>
  );
}
export default PageBlogForm;
