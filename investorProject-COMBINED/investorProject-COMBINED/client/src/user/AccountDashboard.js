import DashboardNav from "../components/DashboardNav";
import AdminAccount from "../components/AdminAccount";
import React from 'react'
import { useSelector } from "react-redux";
import InvestorAccount from "../components/InvestorAccount";
import SocialVentureAccount from "../components/SocialVentureAccount";

const AccountDashboard = () => {

  //Getting current user from state using useSelector
  const { auth } = useSelector((state) => ({ ...state }));
  const { user } = auth;  
  
  function typeToDisplay() {
    const type = user.userType
  
    if(type === "Investor") return "Investor"
    if(type === "SocialVenture") return "SocialVenture"
    if(type === "Admin") return "Admin"
    return null
  }
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
            {(() => {
              switch (typeToDisplay()) {
                case "Investor":   return <InvestorAccount />;
                case "SocialVenture": return <SocialVentureAccount />;
                case "Admin":  return <AdminAccount />;
                default:      return "404: Not a valid account type";
                  }
          })()}
      </div>
    </>
  );
};

export default AccountDashboard;