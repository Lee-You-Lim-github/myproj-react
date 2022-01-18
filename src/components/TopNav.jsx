import useAuth from "hooks/useAuth";
import { Link } from "react-router-dom";

function TopNav() {
  const [auth, , , logout] = useAuth();

  // 로그인을 하고 나서 topnav가 로그아웃으로 바뀌지 않음.
  const handleLogout = () => {
    logout();
  };

  return (
    <div className="my-3">
      <ul className="flex gap-4">
        {!auth.isLoggedIn && (
          <>
            <MyLink to="/accounts/login/">로그인</MyLink>
            <MyLink to="/accounts/signup/">회원가입</MyLink>
          </>
        )}
        {auth.isLoggedIn && (
          <>
            <MyLink to="/accounts/profile/">프로필</MyLink>
            <button onClick={handleLogout}>로그아웃</button>
          </>
        )}

        {/* <li>
          <MyLink to="/reviews/">리뷰 리스트</MyLink>
        </li>
        <li>
          <MyLink to="/examples/components/">컴포넌트 예시</MyLink>
        </li>
        <li>
          <MyLink to="/blog/">블로그</MyLink>
        </li> */}

        {/* <li>
          <MyLink to="/examples/clock/">시계</MyLink>
        </li>
        <li>
          <MyLink to="/examples/css-module/">Css Module</MyLink>
        </li>
        <li>
          <MyLink to="/examples/css-in-js/">Css In Js</MyLink>
        </li>
        <li>
          <MyLink to="/examples/context-api/">Context Api</MyLink>
        </li>
        <li>
          <MyLink to="/examples/context-api-2/">Context Api-2</MyLink>
        </li> */}
        {/* <li>
          <MyLink to="/diary/">!!다이어리!!</MyLink>
        </li> */}
        <li>
          <MyLink to="/news/">뉴스룸</MyLink>
        </li>
        {/* <li>
          <MyLink to="/tour/">국내 Spot</MyLink>
        </li> */}
      </ul>
    </div>
  );
}

function MyLink({ to, children }) {
  return (
    <Link
      to={to}
      className="pb-1 text-gray-500 hover:text-red-500 hover:border-red-500 border-b-4"
    >
      {children}
    </Link>
  );
}

export default TopNav;
