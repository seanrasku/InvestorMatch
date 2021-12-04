import { useState } from "react";
import { toast } from "react-toastify";
import { login } from "../actions/auth";
import LoginForm from "../components/LoginForm";
import { useDispatch } from "react-redux";


//Makes login possible
const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  //Handles what will happen when submit button is clicked for login
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("SEND LOGIN DATA", { email, password });
    try {
      let res = await login({ email, password });
      if (res.data) {
        console.log(
          "SAVE USER RES IN REDUX AND LOCAL STORAGE THEN REDIRECT ===> "
        );
        console.log(res.data);
        // save user and token to local storage
        window.localStorage.setItem("auth", JSON.stringify(res.data));
        // save user and token to redux
        dispatch({
          type: "LOGGED_IN_USER",
          payload: res.data,
        });
        dispatch({
          type: "NULLIFY_TAGS",
          payload: null
        })
        const tags = res.data.user.tags;
        dispatch({
          type: "SET_CURR_USER_TAGS",
          payload: tags,
        })
        window.localStorage.setItem("tag", JSON.stringify(tags))
        history.push("/dashboard");;
      }
    } catch (err) {
      console.log(err);
      if (err.response.status === 400) toast.error(err.response.data);
    }
  };

  return (
    <div className="container-fluid"
          style={{
          backgroundColor: "#006FAA",
          fontFamily: "sans-serif",
          //quick fix for fullscreen background color
          padding: "50px",
          height: "1000px"}}>
      

      <div className="container"
            style={{
              backgroundColor: "#BED2DD",
              fontFamily: "sans-serif",
              padding: "30px",
              borderRadius: "10px"}}>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="container text-center">
            <h1>Login</h1>
            </div>
            <LoginForm
              handleSubmit={handleSubmit}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
