// the AuthContext is used by inner components withing the AuthProvider to use the shared variables and methods through destructuring the useContext(AuthContext)
// $ const { authToken, login, logout } = useContext(AuthContext);
export { default as AuthProvider, AuthContext } from "./authContext";
export { default as FileProvider, FileContext } from "./fileContext";
