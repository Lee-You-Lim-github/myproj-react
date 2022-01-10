import ReviewList from "pages/reviews/ReveiwList";
import Profile from "pages/accounts/Prefile";
import Login from "pages/accounts/Login";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import TopNav from "components/TopNav";
import Components from "pages/examples/Components";
import PageReviewForm from "pages/reviews/PageReviewForm";
import PageBlogList from "pages/blogs/PageBlogList";

function App() {
  return (
    <div className="app">
      <TopNav />
      <Routes>
        <Route path="/" element={<Navigate to="/blogs/" />} />
        <Route path="/accounts/login/" element={<Login />} />
        <Route path="/accounts/profile/" element={<Profile />} />
        <Route path="/reviews/" element={<ReviewList />} />
        <Route path="/reviews/new/" element={<PageReviewForm />} />
        <Route path="/reviews/:reviewId/edit/" element={<PageReviewForm />} />
        <Route path="/examples/components/" element={<Components />} />
        <Route path="/blogs/" element={<PageBlogList />} />
      </Routes>
    </div>
  );
}

export default App;
