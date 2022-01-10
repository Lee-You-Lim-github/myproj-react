import { useState, useEffect } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";

function PageBlogDetail() {
  const [post, setPost] = useState([]);

  const { postId } = useParams();

  useEffect(() => {
    const fetchBlog = async () => {
      const url = `http://localhost:8000/blog/api/posts/${postId}/`;

      try {
        const response = await Axios.get(url);
        setPost(response.data);
      } catch (e) {
        console.error(e);
      }
    };
    if (postId) fetchBlog();
  }, [postId]);

  return (
    <div>
      <h2>Blog Detail</h2>
      {post}
    </div>
  );
}
export default PageBlogDetail;
