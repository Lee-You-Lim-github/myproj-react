import useLocalStorage from "./useLocalStorage";

// 로그인 여부
const INITIAL_AUTH = { isLoggedIn: false };

function useAuth() {
  const [auth, setAuth] = useLocalStorage("auth", INITIAL_AUTH);
  return [auth, setAuth];
}
export default useAuth;
