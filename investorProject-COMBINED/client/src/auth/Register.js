import { useState } from "react";
import RegisterForm from "../components/RegisterForm";
import { toast } from "react-toastify";
import { register } from "../actions/auth";
import { useDispatch } from "react-redux";
import VenturePopup from "./VenturePopup";
import ReactDOM from "react-dom";

const Register = ({ history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const dispatch = useDispatch();


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      
      let profilePic = {Data: "data", ContentType: "temp"};

      
      const res = await register({
        name,
        email,
        password,
        userType,
        profilePic, //just put temp data in profile pic to prevent error on profile page
      });

      console.log("REGISTER USER ===> ", res);
      console.log(res.data);
      if (userType == "SocialVenture"){
        
        //console.log("kjahkjhefsnl");
        //send to the venture continued form
        window.localStorage.setItem("auth", JSON.stringify(res.data));
        dispatch({
          type: "TEMP_INFO",
          payload: res.data,
        });
        history.push("/VenturePopup");
      }

      else{
      //console.log("REGISTER USER ===> ", res);

      toast.success("Register success. Please login.");
      history.push("/login");
      }

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
            <h1>Register</h1>
          </div>
          <RegisterForm
            handleSubmit={handleSubmit}
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            userType = {userType} 
            setUserType = {setUserType}
          />
        </div>
      </div>
    </div>

  </div>
  );
};
export default Register;
