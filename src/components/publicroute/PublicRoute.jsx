import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
  const user = { loggedIn: localStorage.getItem("auth") };
  return user && user.loggedIn;
};
const PublicRoute = () => {
  const isAuth = useAuth();
  return isAuth ? <Navigate to="/" /> : <Outlet />;
};

export default PublicRoute;
