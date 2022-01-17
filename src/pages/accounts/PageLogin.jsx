// username 필드 추가 : input[type=text]      name=username
// password 필드 추가 : input[type=password]  name=password
// userFieldValues 훅 쓰시고
// PageLogin 컴포넌트 내에서 fieldValues 상탯값 노출
// 로그인 버튼을 누르면, http://localhost:8000/accounts/api/token/ 주소로 POST 요청을 보내어
// (username, password) 응답을 받아서, 일단은 console.log에 출력을 합니다.

import { useApiAxios } from "api/base";
import Button from "components/Button";
import DebugStates from "components/DebugStates";
import LoadingIndicator from "components/LoadingIndicator";
import useFieldValues from "hooks/useFieldValues";
import { useNavigate } from "react-router-dom";

const INIT_LOGIN_VALUES = {
  username: "",
  password: "",
};

function PageLogin() {
  const { fieldValues, handleFieldChange, formData } =
    useFieldValues(INIT_LOGIN_VALUES);
  const navigate = useNavigate();

  const [
    {
      loading: loginLoading,
      error: loginError,
      errorMassages: loginErrorMassages,
    },
    saveLogin,
  ] = useApiAxios(
    {
      url: "/accounts/api/token/",
      method: "POST",
    },
    { manual: true }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    saveLogin({ data: formData }).then(() => {
      console.log("로그인 완료!!!");
      navigate("/accounts/profile/");
    });
  };

  return (
    <div>
      <h2>Login</h2>
      {loginLoading && <LoadingIndicator>로그인 중...</LoadingIndicator>}
      {loginError && "로그인 중 에러가 났습니다."}
      <form
        onSubmit={handleSubmit}
        className="rounded border-2 border-gray-300 p-3 my-3"
      >
        <div className="mb-4">
          <label>User Name</label>
          <input
            type="text"
            name="username"
            value={fieldValues.username}
            onChange={handleFieldChange}
            className="shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label>PassWord</label>
          <input
            type="password"
            name="password"
            value={fieldValues.password}
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
      />
    </div>
  );
}
export default PageLogin;
