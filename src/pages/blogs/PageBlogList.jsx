import Axios from "axios";
import BlogList from "components/blogs/BlogList";
import { useState, useEffect } from "react";

function PageBlogList() {
  const [blogList, setBlogList] = useState([]);

  useEffect(() => {
    refetch();
  }, []);

  const refetch = () => {
    const url = "http://127.0.0.1:8000/blog/api/posts/";

    Axios.get(url)
      .then(({ data }) => setBlogList(data))
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
        {blogList.map((blog) => (
          <BlogList key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
}
export default PageBlogList;
