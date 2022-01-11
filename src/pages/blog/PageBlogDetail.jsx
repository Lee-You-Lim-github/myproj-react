import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BlogDetail from "components/blog/BlogDetail";
import { axiosInstance } from "api/base";

function PageBlogDetail() {
  const [post, setPost] = useState([]);

  const { postId } = useParams();

  useEffect(() => {
    const url = `/blog/api/posts/${postId}/`;

    axiosInstance
      .get(url)
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
