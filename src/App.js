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
// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
import Clock from "pages/examples/Clock";
import CssModule from "pages/examples/CssModule";
import CssInJs from "pages/examples/CssInJs";
import ContextApiSample from "pages/examples/ContextApiSample";
import ContextApiSample2 from "pages/examples/ContextApiSample2";
// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
import PageDiaryList from "pages/diarys/PageDiaryList";
import PageDiaryDetail from "pages/diarys/PageDiaryDetail";
import PageDiaryForm from "pages/diarys/PageDiaryForm";
// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
import PageNewsIndex from "pages/news/PageNewsIndex";
import PageNewsArticleDetail from "pages/news/PageNewsArticleDetail";
import PageNewsArticleForm from "pages/news/PageNewsArticleForm";
import PageTourIndex from "pages/tour/PageTourIndex";
import PageTourSpotDetail from "pages/tour/PageTourSpotDetail";
import PageTourSpotForm from "pages/tour/PageTourSpotForm ";

function App() {
  const windowWidth = useWindowWidth();
  return (
    <>
      <div className="app">
        <TopNav />
        <Routes>
          <Route path="/" element={<Navigate to="/tour/" />} />
          <Route path="/accounts/login/" element={<Login />} />
          <Route path="/accounts/profile/" element={<Profile />} />
          <Route path="/reviews/" element={<ReviewList />} />
          <Route path="/reviews/new/" element={<PageReviewForm />} />
          <Route path="/reviews/:reviewId/edit/" element={<PageReviewForm />} />
          <Route path="/blog/" element={<PageBlogList />} />
          <Route path="/blog/:postId/" element={<PageBlogDetail />} />
          <Route path="/blog/new/" element={<PageBlogForm />} />
          <Route path="/blog/:postId/edit/" element={<PageBlogForm />} />
          <Route path="/examples/components/" element={<Components />} />
          <Route path="/examples/css-module/" element={<CssModule />} />
          <Route path="/examples/css-in-js/" element={<CssInJs />} />
          <Route path="/examples/context-api/" element={<ContextApiSample />} />
          <Route
            path="/examples/context-api-2/"
            element={<ContextApiSample2 />}
          />
          <Route path="/diary/" element={<PageDiaryList />} />
          <Route path="/diary/:diaryId/" element={<PageDiaryDetail />} />
          <Route path="/diary/new" element={<PageDiaryForm />} />

          <Route path="/news/" element={<PageNewsIndex />} />
          <Route path="/news/new" element={<PageNewsArticleForm />} />
          <Route path="/news/:articleId/" element={<PageNewsArticleDetail />} />
          <Route
            path="/news/:articleId/edit/"
            element={<PageNewsArticleForm />}
          />

          <Route path="/tour/" element={<PageTourIndex />} />
          <Route path="/tour/new/" element={<PageTourSpotForm />} />
          <Route path="/tour/:spotId/" element={<PageTourSpotDetail />} />
          <Route path="/tour/:spotId/edit" element={<PageTourSpotForm />} />
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
