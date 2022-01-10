import Axios from "axios";
import BlogList from "components/blog/BlogList";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function PageBlogList() {
  const [postList, setPostList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    refetch();
  }, []);

  const refetch = () => {
    setLoading(true);
    setError(null);

    const url = "http://127.0.0.1:8000/blog/api/posts/";

    Axios.get(url)
      .then(({ data }) => setPostList(data))
      .catch((error) => {
        console.error("에러 응답");
        setError(error);
      })
      .finally(() => setLoading(false));
  };

  const deletePost = (deletingPost) => {
    setLoading(true);
    setError(null);

    const { id: deletingPostId } = deletingPost;
    const url = `http://127.0.0.1:8000/blog/api/posts/${deletingPostId}`;

    Axios.delete(url)
      .then(() => {
        console.log("삭제 성공");
        setPostList((prevPostList) => {
          return prevPostList.filter((post) => post.id !== deletingPostId);
        });
      })
      .catch((error) => {
        console.error("에러 응답");
        setError(error);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div>
      <h2 className="text-red-400 border-b-2 border-red-300">Blog</h2>
      <div>
        {postList.map((post) => (
          <BlogList
            key={post.id}
            post={post}
            handleDelete={() => deletePost(post)}
            loading={loading}
          />
        ))}
      </div>
      <button
        onClick={() => navigate(`/blog/new/`)}
        className="shadow border bg-blue-100 hover:bg-blue-300 border-blue-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight"
      >
        새 포스팅
      </button>
    </div>
  );
}
export default PageBlogList;
