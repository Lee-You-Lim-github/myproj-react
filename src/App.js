import ReviewList from "pages/reviews/ReveiwList";
import Profile from "pages/accounts/Prefile";
import Login from "pages/accounts/Login";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import TopNav from "components/TopNav";
import Components from "pages/examples/Components";
import useWindowWidth from "pages/examples/useWindowWidth";
import PageReviewForm from "pages/reviews/PageReviewForm";
import PageBlogList from "pages/blog/PageBlogList";
import PageBlogDetail from "pages/blog/PageBlogDetail";
import PageBlogForm from "pages/blog/PageBlogForm";
import Clock from "pages/examples/Clock";
import CssModule from "pages/examples/CssModule";
import CssInJs from "pages/examples/CssInJs";

function App() {
  const windowWidth = useWindowWidth();
  return (
    <>
      <div className="app">
        <TopNav />
        <Routes>
          <Route path="/" element={<Navigate to="/blog/" />} />
          <Route path="/accounts/login/" element={<Login />} />
          <Route path="/accounts/profile/" element={<Profile />} />
          <Route path="/reviews/" element={<ReviewList />} />
          <Route path="/reviews/new/" element={<PageReviewForm />} />
          <Route path="/reviews/:reviewId/edit/" element={<PageReviewForm />} />
          <Route path="/examples/components/" element={<Components />} />
          <Route path="/blog/" element={<PageBlogList />} />
          <Route path="/blog/:postId/" element={<PageBlogDetail />} />
          <Route path="/blog/new/" element={<PageBlogForm />} />
          <Route path="/blog/:postId/edit/" element={<PageBlogForm />} />
          <Route path="/examples/css-module/" element={<CssModule />} />
          <Route path="/examples/css-in-js/" element={<CssInJs />} />
        </Routes>
        <hr />
        윈도우 가로크기 : {windowWidth}px
      </div>
      <div>
        <Routes>
          <Route path="/examples/clock/" element={<Clock />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
