import DashboardNav from "../components/DashboardNav";
import { Link } from "react-router-dom";
import Interests from "../components/Interests"

//User dashboard
const Dashboard = () => {
  return (
    <>
      <div className="">
        <DashboardNav />
      </div>



      <div className="container-fluid"
            style={{
              backgroundColor: "#006FAA",
              fontFamily: "sans-serif",
              padding: "100px"}}>
        <div className="row">
          <div className="col-md-10">
            <h2>My Interests</h2>
          </div>
          <div className="col-md-2">
            <Link to="/" className="btn btn-primary">
              Browse Ventures
            </Link>
          </div>
          <Interests />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
