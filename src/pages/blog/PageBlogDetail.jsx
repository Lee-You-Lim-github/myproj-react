import { useState, useEffect } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";
import BlogDetail from "components/blog/BlogDetail";

function PageBlogDetail() {
  const [post, setPost] = useState([]);

  const { postId } = useParams();

  useEffect(() => {
    const url = `http://localhost:8000/blog/api/posts/${postId}/`;

    Axios.get(url)
      .then(({ data }) => {
        setPost(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [postId]);

  return (
    <div>
      <BlogDetail post={post} />
    </div>
  );
}
export default PageBlogDetail;
