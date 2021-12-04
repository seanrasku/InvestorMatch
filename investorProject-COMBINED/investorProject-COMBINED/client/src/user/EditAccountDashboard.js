import DashboardNav from "../components/DashboardNav";
import React from 'react'
import EditAccount from "../components/EditAccount";
const EditAccountDashboard = () => {
  return (
    <>
    

      <div>
        <DashboardNav />
      </div>

      <div className="container-fluid"
            style={{
            backgroundColor: "#006FAA",
            fontFamily: "sans-serif",
            padding: "50px"}}>
          <div className="col-md-8">
            <EditAccount />
          </div>
      </div>
    </>
  );
};

export default EditAccountDashboard;