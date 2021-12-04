import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import tempPic from './Logo.png';

const TopNav = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => ({ ...state }));
  const history = useHistory();

  const logout = () => {
    dispatch({
      type: "LOGOUT",
      payload: null,
    });

    window.localStorage.removeItem("auth");
    history.push("/login");
  };

  return (
    <div className="container"
          style={{
            fontFamily: "sans-serif",
            padding: "12px"
          }}>

      <div className="row">

        <div className="col-md">
          <img className = "logo" src = {tempPic} width="130" height="50" />
        </div>
          
        <div className="col-md-auto">
        <Link className="nav-link" to="/VenturePopup">
        </Link>
        </div>
        
        <div className="col-md-auto">
          <Link className="nav-link" to="/"
            style={{
              backgroundColor: "#BED2DD",
              color: "black",
              fontFamily: "sans-serif",
              //width: "100px",
              borderRadius: "5px"}}>
            Home
          </Link>
        </div>

          {auth !== null && (
            <div className="col-md-auto">
              <Link className="nav-link" to="/dashboard" 
                style={{
                backgroundColor: "#BED2DD",
                color: "black",
                fontFamily: "sans-serif",
                borderRadius: "5px"}}>
                Dashboard
              </Link>
            </div>
          )}

        {auth !== null && (
          <div className="col-md-auto">
            <a className="nav-link pointer" onClick={logout}
              style={{
                backgroundColor: "#BED2DD",
                color: "black",
                fontFamily: "sans-serif",
                borderRadius: "5px"}}>
              Logout
            </a>
          </div>
        )}

        {auth === null && (
          <>
            <div className="col-md-auto">
              <Link className="nav-link" to="/login"
                style={{
                  backgroundColor: "#BED2DD",
                  color: "black",
                  fontFamily: "sans-serif",
                  //width: "100px",
                  borderRadius: "5px"}}>
                Login
              </Link>
            </div>

            <div className="col-md-auto">
              <Link className="nav-link" to="/register"
                style={{
                  backgroundColor: "#BED2DD",
                  color: "black",
                  fontFamily: "sans-serif",
                  borderRadius: "5px"}}>
                Register
              </Link>
            </div>
          </>
        )}
    </div>
  </div>
  );
};

export default TopNav;
