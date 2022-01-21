import { useApiAxios } from "api/base";
import Button from "components/Button";
import DebugStates from "components/DebugStates";
import H2 from "components/H2";
import LoadingIndicator from "components/LoadingIndicator";
import { useAuth } from "contexts/AuthContext";
import useFieldValues from "hooks/useFieldValues";
import { useNavigate } from "react-router-dom";

const INIT_SIGNUP_VALUES = {
  username: "",
  password: "",
  password2: "",
};

function SingupForm() {
  const [auth, _, login] = useAuth();
  const navigate = useNavigate();

  const [
    { loading, error, errorMessages: signupErrorMessages },
    requestSignup,
  ] = useApiAxios(
    {
      url: "/accounts/api/signup/",
      method: "POST",
    },
    { manual: true }
  );

  const { fieldValues, handleFieldChange } = useFieldValues(INIT_SIGNUP_VALUES);

  const handleSubmit = (e) => {
    e.preventDefault();
    requestSignup({ data: fieldValues }).then((response) => {
      const { access, refresh, username, first_name, last_name } =
        response.data;
      login({
        access,
        refresh,
        username,
        first_name,
        last_name,
      });
      console.log("가입완료");
      navigate("/accounts/login/");
    });
  };

  return (
    <div>
      <H2>회원가입</H2>
      {loading && <LoadingIndicator>저장 중...</LoadingIndicator>}
      {error &&
        `회원가입 중 에러가 발생했습니다. (${error.response.status} ${error.response.statusText})`}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label>username</label>
          <input
            type="text"
            name="username"
            value={fieldValues.username}
            onChange={handleFieldChange}
            className="shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          />
          {signupErrorMessages.username?.map((message, index) => (
            <p key={index} className="text-xs text-red-400">
              {message}
            </p>
          ))}
        </div>
        <div className="mb-4">
          <label>password</label>
          <input
            type="password"
            name="password"
            value={fieldValues.password}
            onChange={handleFieldChange}
            className="shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          />
          {signupErrorMessages.password?.map((message, index) => (
            <p key={index} className="text-xs text-red-400">
              {message}
            </p>
          ))}
        </div>
        <div className="mb-4">
          <label>2차 password</label>
          <input
            type="password"
            name="password2"
            value={fieldValues.password2}
            onChange={handleFieldChange}
            className="shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          />
          {signupErrorMessages.non_field_errors?.map((message, index) => (
            <p key={index} className="text-xs text-red-400">
              {message}
            </p>
          ))}
        </div>
        <Button>가입</Button>
      </form>
      <DebugStates
        fieldValues={fieldValues}
        signupErrorMessages={signupErrorMessages}
        error={error}
        auth={auth}
      />
    </div>
  );
}

export default SingupForm;
