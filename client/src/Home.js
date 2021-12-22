import {useState, useEffect, useRef} from 'react';
import { useSelector } from "react-redux";
import { Carousel } from 'antd';
import {allUsers} from './actions/user';
import "antd/dist/antd.css";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "../src/index.css";
import axios from 'axios';
import ReactDOM from "react-dom";

function onChange(a, b, c) {
  console.log(a, b, c);
}



const styleDefaults = {
  height: 200,
  textAlign: "center"
};


const Home = () => {
  const [investors, setInv] = useState([]);
  const [socialVentures, setSV] = useState([]);
  // if (window.localStorage.getItem("auth")) {
  //   console.log("GOTTEM")
  // }
  // console.log("HIIIIIIIIi")
  // //Getting current user from state using useSelector
  // const { auth } = useSelector((state) => ({ ...state }));
  // console.log(auth);
  // const { user } = auth;


  // //Displaying users for current user
  useEffect(() => {
    loadUsersForUserType();
  }, []);

  
  // //Getting users from backend and sorting based on usertype then returning for useEffect
  // //to use
  const loadUsersForUserType = async () => {
    
      let res = await allUsers();
      let res2 = res.data.filter(function (property){
        return property.userType === "Investor";
      });
      let res3 = res.data.filter(function (property){
        return property.userType === "SocialVenture";
      });

      let length1 = Math.ceil(res2.length/4) ;
      let length2 = Math.ceil(res3.length/4) ;
      let investorsArray = [];
      for(let i=0;i<length1;i++){
        investorsArray[i] = {};
        investorsArray[i].items = []
        for(let j = i*4; j<res2.length; j++){
          if(j<(i+1)*4){
            investorsArray[i].items.push(res2[j]);
          }
        }
      }
      let socialVenturesArray = []
      for(let i=0;i<length2;i++){
        socialVenturesArray[i] = {};
        socialVenturesArray[i].items = []
        for(let j = i*4; j<res3.length; j++){
          if(j<(i+1)*4){
            socialVenturesArray[i].items.push(res3[j]);
          }
        }
      }
      setInv(investorsArray);
      setSV(socialVenturesArray);

      // console.log(res2);
      // if(user.userType === "SocialVenture"){
      //   setInv(res2);
      // }
      // if(user.userType === "Investor"){
      //   console.log("Got here")
      //   setSV(res3);
      // }
  };

  //   //Gets opposite of current users user type
  // function typeToDisplay() {
  //   const type = user.userType

  //   if(type === "Investor") return "SocialVenture"
  //   if(type === "SocialVenture") return "Investor"
  //   return null
  // }
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      {/* <div className="container-fluid bg-warning p-5 text-center">
        <h1>Home</h1>
      </div>
      <div className="container-fluid">
        <pre>{JSON.stringify((typeToDisplay() === "Investor" ? investors : socialVentures), null, 4)}</pre>
      </div> */}
      <div style={{
          width: "80%",
          margin: "auto",
          backgroundColor: "#BED2DD",
          padding: "50px",
          borderRadius: "10px",
          marginTop: '20px'}}>
          <span style={{fontSize: 20}}>Welcome to Impact Finance Center's Match.com for investors and social ventures to connect and get
          capital flowing for good. Search for a social venture or investor above or brows below through our discover panel. If you have
          an area of interest you'd like to filter, click the appropriate tag under the discover panel.</span>
      </div>
      <div style={{
          width: "80%",
          margin: "auto",
          backgroundColor: "#BED2DD",
          padding: "50px",
          borderRadius: "10px",
          marginTop: '20px'}}>
          <div style={{textAlign:'center'}}>
              <span style={{
              fontSize: 28,
              fontWeight: 'bold',
              fontFamily: 'Helvetica',}}>Discover</span>
          </div>
          <div style={{textAlign:'center', marginTop:'20px'}}>
              <span style={{
              fontSize: 23,
              fontWeight: 'bold',
              fontFamily: 'Helvetica',}}>Social Ventures</span>
          </div>
          {/* shows social Ventures */}
          <Carousel arrows={true} prevArrow={<LeftOutlined style={{color:'black', width:'20px', height:'20px'}}/>}
           nextArrow={<RightOutlined />}>
            {socialVentures.map((t, index) => {
              return(
                <div key={index}>
                  {
                    t.items.map((subItem,index1) => {
                      return(
                      <div key={index1} style={{display:"inline-block", height:'200px',width:'25%', paddingTop:'30px'}}>
                        <img src={subItem.profilePic}
                            className='card-image-avatar'
                            alt=''
                        />
                        <div style={{textAlign:'center'}}>{subItem.name}</div>
                      </div>
                      )
                    })
                  }
                </div>
              )
            })}
          </Carousel>
          <div style={{textAlign:'center', marginTop:'20px'}}>
              <span style={{
              fontSize: 23,
              fontWeight: 'bold',
              fontFamily: 'Helvetica',}}>Investors</span>
          </div>
           {/* shows Investors */}
          <Carousel>
            {investors.map((t, index) => {
              return(
                <div key={index}>
                  {
                    t.items.map((subItem,index1) => {
                      return(
                      <div key={index1} style={{display:"inline-block", height:'200px',width:'25%', paddingTop:'30px'}}>
                        <img src={subItem.profilePic}
                            className='card-image-avatar'
                            alt=''
                        />
                        <div style={{textAlign:'center'}}>{subItem.name}</div>
                      </div>
                      )
                    })
                  }
                </div>
              )
            })}
          </Carousel>
      </div>
    </div>
  );
};

export default Home;