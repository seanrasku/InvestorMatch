import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
//private route for accessing pages only available when logged in
const PrivateRoute = ({ ...rest }) => {
  const { auth } = useSelector((state) => ({ ...state }));
  return auth && auth.token ? <Route {...rest} /> : <Redirect to="/login" />;
};

export default PrivateRoute;
