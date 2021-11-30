import {useState, useEffect} from 'react';
import { useSelector } from "react-redux";
import {allUsers} from './actions/user';
import axios from 'axios';

const Home = () => {
  // const [investors, setInv] = useState([]);
  // const [socialVentures, setSV] = useState([]);
  // if (window.localStorage.getItem("auth")) {
  //   console.log("GOTTEM")
  // }
  // console.log("HIIIIIIIIi")
  // //Getting current user from state using useSelector
  // const { auth } = useSelector((state) => ({ ...state }));
  // console.log(auth);
  // const { user } = auth;


  // //Displaying users for current user
  // useEffect(() => {
  //   loadUsersForUserType();
  // }, []);


  // //Getting users from backend and sorting based on usertype then returning for useEffect
  // //to use
  // const loadUsersForUserType = async () => {
    
  //     let res = await allUsers();
  //     let res2 = res.data.filter(function (property){
  //       return property.userType === "Investor";
  //     });
  //     let res3 = res.data.filter(function (property){
  //       return property.userType === "SocialVenture";
  //     });
  //     if(user.userType === "SocialVenture"){
  //       setInv(res2);
  //     }
  //     if(user.userType === "Investor"){
  //       console.log("Got here")
  //       setSV(res3);
  //     }
  // };

  //   //Gets opposite of current users user type
  // function typeToDisplay() {
  //   const type = user.userType

  //   if(type === "Investor") return "SocialVenture"
  //   if(type === "SocialVenture") return "Investor"
  //   return null
  // }
  return (
    <>
    {/* <div className="container-fluid bg-warning p-5 text-center">
      <h1>Home</h1>
    </div>
    <div className="container-fluid">
      <pre>{JSON.stringify((typeToDisplay() === "Investor" ? investors : socialVentures), null, 4)}</pre>
    </div> */}
    <h1>Now an actual homepage</h1>
    </>
  );
};

export default Home;