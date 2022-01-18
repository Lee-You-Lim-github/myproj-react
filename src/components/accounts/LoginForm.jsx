// username 필드 추가 : input[type=text]      name=username
// password 필드 추가 : input[type=password]  name=password
// userFieldValues 훅 쓰시고
// PageLogin 컴포넌트 내에서 fieldValues 상탯값 노출
// 로그인 버튼을 누르면, http://localhost:8000/accounts/api/token/ 주소로 POST 요청을 보내어
// (username, password) 응답을 받아서, 일단은 console.log에 출력을 합니다.

import { useApiAxios } from "api/base";
import Button from "components/Button";
import DebugStates from "components/DebugStates";
import H2 from "components/H2";
import LoadingIndicator from "components/LoadingIndicator";
import useAuth from "hooks/useAuth";
import useFieldValues from "hooks/useFieldValues";

import { useNavigate } from "react-router-dom";

const INIT_LOGIN_VALUES = {
  username: "",
  password: "",
};

function LoginForm() {
  const { fieldValues, handleFieldChange } = useFieldValues(INIT_LOGIN_VALUES);
  const navigate = useNavigate();

  const [auth, _, login] = useAuth();

  const [
    {
      loading: loginLoading,
      error: loginError,
      errorMassages: loginErrorMassages,
    },
    requestToken,
  ] = useApiAxios(
    {
      url: "/accounts/api/token/",
      method: "POST",
    },
    { manual: true }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    requestToken({ data: fieldValues }).then((response) => {
      const { access, refresh, username, first_name, last_name } =
        response.data;
      // TODO : access, refresh token을 브라우저 어딘가에 저장해야 합니다.
      // 저장해서 페이지 새로고침이 발생하더라도 그 token이 유실되지 않아야 합니다.
      login({
        access,
        refresh,
        username,
        first_name,
        last_name,
      });

      console.log("access:", access);
      console.log("refresh:", refresh);
      console.log("username:", username);
      console.log("first_name:", first_name);
      console.log("last_name:", last_name);

      console.log("로그인 완료!!!");
      navigate("/accounts/profile/");
    });
  };

  return (
    <div>
      <H2>로그인</H2>
      {loginLoading && <LoadingIndicator>로그인 중...</LoadingIndicator>}
      {loginError?.response?.status === 401 && (
        <div>로그인에 실패했습니다.</div>
      )}

      <form
        onSubmit={handleSubmit}
        className="rounded border-2 border-gray-300 p-3 my-3"
      >
        <div className="mb-4">
          <label>아이디</label>
          <input
            type="text"
            name="username"
            value={fieldValues.username}
            placeholder="username"
            onChange={handleFieldChange}
            className="shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label>비밀번호</label>
          <input
            type="password"
            name="password"
            value={fieldValues.password}
            placeholder="password"
            onChange={handleFieldChange}
            className="shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <Button>로그인</Button>
      </form>

      <DebugStates
        fieldValues={fieldValues}
        loginLoading={loginLoading}
        loginError={loginError}
        loginErrorMassages={loginErrorMassages}
        auth={auth}
      />
    </div>
  );
}
export default LoginForm;
