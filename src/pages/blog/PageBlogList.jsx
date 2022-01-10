import Axios from "axios";
import BlogList from "components/blog/BlogList";
import { useState, useEffect } from "react";

function PageBlogList() {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    refetch();
  }, []);

  const refetch = () => {
    const url = "http://127.0.0.1:8000/blog/api/posts/";

    Axios.get(url)
      .then(({ data }) => setPostList(data))
      .catch((error) => {
        console.group("에러 응답");
        console.log(error);
        console.groupEnd();
      });
  };

  return (
    <div>
      <h2 className="text-red-400 border-b-2 border-red-300">Blog</h2>
      <div>
        {postList.map((post) => (
          <BlogList key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
export default PageBlogList;
