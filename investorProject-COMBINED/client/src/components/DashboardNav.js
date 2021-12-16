import { Link } from "react-router-dom";

const DashboardNav = () => {
  const active = window.location.pathname;

  //creates active path and declares a path for all tabs in dashboard nav
  return (
    <div className="d-flex justify-content-end">

    <ul className="nav nav-tabs"
        style={{
          
          fontFamily: "sans-serif"
          
          }}>
      <li className="nav-item">
        <Link
          className={`nav-link ${active === "/dashboard" && "active"}`}
          to="/dashboard">
          My Interests
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className={`nav-link ${active === "/dashboard/editAccount" && "active"}`}
          to="/dashboard/editaccount"
        >
          Edit Account
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className={`nav-link ${active === "/dashboard/account" && "active"}`}
          to="/dashboard/account"
        >
          My Profile
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className={`nav-link ${active === "/dashboard/connect" && "active"}`}
          to="/dashboard/connect">
          Connect
        </Link>
      </li>
    </ul>
    </div>
  );
};

export default DashboardNav;
