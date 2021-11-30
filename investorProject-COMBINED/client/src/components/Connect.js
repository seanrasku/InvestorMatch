import {useState, useEffect} from 'react';
import { useSelector } from "react-redux";
import {allUsers} from '../actions/user'
import ConnectUserProfile from './ConnectUserProfile';

const Connect = (props) => {
const {searchedUsers} = props;

  console.log("CONNECT USERS: ", searchedUsers)
 



  return (
    <div style={{
      backgroundColor: "#006FAA",
      fontFamily: "sans-serif",
      padding: "100px"
      }}>
      <div className="container-fluid text-center"
            style={{
              backgroundColor: "#BED2DD",
              paddingTop: "30px",
              paddingBottom: '30px',
              marginBottom: '30px',
              borderRadius: '10px',
              }}>
            <h1>Connect</h1>
      </div>
        <div className="container-fluid">
        <div style={{
              backgroundColor: "#BED2DD",
              paddingLeft: "50px",
              paddingRight: "50px",
              paddingBottom: '50px',

              borderRadius: "10px"
              }}>
          {searchedUsers.length !== 0 ? searchedUsers.map((u) => {
          return(
            
            <ConnectUserProfile key={u._id} name={u.name} userType={u.userType} bio = {u.bio}/>
            )
          }) : <h3 style={{textAlign: 'center', paddingTop: '50px', fontStyle: 'italic'}}>No Users Found</h3>}
          </div>

      </div>
    </div>
        
  );
};

export default Connect;