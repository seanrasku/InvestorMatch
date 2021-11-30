import { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { updateProfile } from "../actions/user";
import VentureForm from "./VentureForm";

const VenturePopup = ({ history }) => {
    const { auth } = useSelector((state) => ({ ...state }));
    //console.log(auth);
    const { user } = auth;
    const [phone, setPhone] = useState("");
    const [orgName, setOrgName] = useState("");
    const [website, setWebsite] = useState("");
    const [legalStructure, setLegalStructure] = useState("");
    const [yearOfInc, setYearofInc] = useState("");
    const [projectName, setProjectName] = useState("");
    const [projectDes, setProjectDes] = useState("");
    const [amount, setAmount] = useState("");
    const [securityType, setSecurityType] = useState("");
    const [companySize, setComapnySize] = useState("");
    const [numEmployees, setNumEmployees] = useState("");
    const [taxId, setTaxId] = useState("");
    const [raisingWhat, setRaisingWhat] = useState("");
    const [equityTerms, setEquityTerms] = useState("");
    const [intrestRate, setIntrestRate] = useState("");
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            
            console.log(user._id);

            let data1 = new FormData();
            data1.append("phone", phone);
            data1.append("orgName", orgName);
            data1.append("website", website);
            data1.append("legalStructure", legalStructure);
            data1.append("yearOfInc", yearOfInc);
            data1.append("projectName", projectName);
            data1.append("projectDes", projectDes);
            data1.append("amount", amount);
            data1.append("securityType", securityType);
            data1.append("companySize", companySize);
            data1.append("numEmployees", numEmployees);
            data1.append("taxId", taxId);
            data1.append("raisingWhat", raisingWhat);
            data1.append("equityTerms", equityTerms);
            data1.append("intrestRate", intrestRate);
        
            let res = await updateProfile(user._id , data1);

            toast.success("Register success. Please login.");
            history.push("/login");

        } catch (err) {
        console.log(err);
        if (err.response.status === 400) toast.error(err.response.data);
        }
  };

    return (
        <div style={{
          backgroundColor: "#006FAA",
          fontFamily: "sans-serif",
          height: "1000px",
          padding: "50px"}} >
  
      <div className="container"
          style={{
            backgroundColor: "#BED2DD",
            fontFamily: "sans-serif",
            padding: "30px",
            borderRadius: "10px"}}>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="container text-center">
              <h1>Venture Registration Continued</h1>
            </div>
            <VentureForm
              handleSubmit={handleSubmit}
              phone={phone}
              setPhone={setPhone}
              orgName={orgName}
              setOrgName={setOrgName}
              website={website}
              setWebsite={setWebsite}
              legalStructure={legalStructure}
              setLegalStructure={setLegalStructure}
              yearOfInc={yearOfInc}
              setYearofInc={setYearofInc}
              projectName={projectName}
              setProjectName={setProjectName}
              projectDes={projectDes}
              setProjectDes={setProjectDes}
              amount={amount}
              setAmount={setAmount}
              securityType={securityType}
              setSecurityType={setSecurityType}
              companySize={companySize}
              setComapnySize={setComapnySize}
              numEmployees={numEmployees}
              setNumEmployees={setNumEmployees}
              taxId={taxId}
              setTaxId={setTaxId}
              raisingWhat={raisingWhat}
              setRaisingWhat={setRaisingWhat}
              equityTerms={equityTerms}
              setEquityTerms={setEquityTerms}
              intrestRate={intrestRate}
              setIntrestRate={setIntrestRate}
            />
          </div>
        </div>
      </div>
  
    </div>
    );
};
export default VenturePopup;