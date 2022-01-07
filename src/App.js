import ReviewList from "pages/reviews/ReveiwList";
import Profile from "pages/accounts/Prefile";
import Login from "pages/accounts/Login";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import TopNav from "components/TopNav";

function App() {
  return (
    <div className="app">
      <TopNav />
      <Routes>
        <Route pathe="/accounts/login" element={<Login />} />
        <Route path="/accounts/profile" element={<Profile />} />
        <Route path="reviews" element={<ReviewList />} />
      </Routes>
    </div>
  );
}

export default App;
