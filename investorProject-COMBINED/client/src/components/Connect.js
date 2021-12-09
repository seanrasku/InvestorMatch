import {useState, useEffect} from 'react';
import { useSelector } from "react-redux";
import {allUsers} from '../actions/user'
import ConnectUserProfile from './ConnectUserProfile';

//connect page that lets you search for users
const Connect = (props) => {
const {searchedUsers} = props;

  console.log("CONNECT USERS: ", searchedUsers)
 
  const styleContainer = {
    //backgroundColor: "#006FAA",
    //fontFamily: "sans-serif",
    //paddingLeft: "100px",
    //paddingBottom: "100px",    
    //margin: 'auto',

  }

  //what is displayed
  return (
    <div style={styleContainer}>
      <div className="container-fluid text-center"
            style={{
              backgroundColor: "#BED2DD",
              paddingTop: "30px",
              paddingBottom: '30px',
              marginBottom: '30px',
              borderRadius: '10px',
              width: '1111px'
              }}>
            <h1>Connect</h1>
      </div>
        <div className="container-fluid">
        <div style={{
              backgroundColor: "#BED2DD",
              display: 'flex',
              flexFlow: 'row wrap',
              justifyContent: 'center',
              // paddingRight: "50px",
              // paddingBottom: '50px',
              width: 'auto',
              //margin: 'auto',
              borderRadius: "10px"
              }}>
          {searchedUsers.length !== 0 ? searchedUsers.map((u) => {
          return(
            
            <ConnectUserProfile key={u._id} name={u.name} profilePic={u.profilePic.Data} bio = {u.bio}/>
            )
          }) : <h3 style={{textAlign: 'center', paddingTop: '50px', fontStyle: 'italic'}}>No Users Found</h3>}
          </div>

      </div>
    </div>
        
  );
};

export default Connect;