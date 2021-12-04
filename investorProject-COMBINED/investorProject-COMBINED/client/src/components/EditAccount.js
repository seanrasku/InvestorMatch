import React from 'react';
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { updateProfile } from "../actions/user";
import { uploadPic } from "../actions/user";
import EditAccountForm from "./EditAccountForm";
import axios from 'axios';
import tempPic from './Logo.png';


const EditAccount = ({}) => {    
    const { auth } = useSelector((state) => ({ ...state }));
    const { user } = auth;
    const [name, setName] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const [phone, setPhone] = useState("");
    const [location, setLocation] = useState("");
    const [bio, setBio] = useState("");
    const [links, setLinks] = useState("");

    const styleObj = {
        fontSize: 18,
        fontFamily: 'Helvetica',
    }

   

    const editItem = async (e) => {

      e.preventDefault();

      //what they change besides profile pic
      let data1 = new FormData();
      var hasChanaged = 0;

      if (name) {

        user.name = name;
        data1.append("name", name);
        hasChanaged += 1;
      }

      if (profilePic){

        let data2 = new FormData();
        data2.append("file", profilePic);


        try {
          let res1 = await uploadPic(auth.token, user._id, data2);
          if (res1.data) {
          
            //console.log(res1.data.profilePic);
            //console.log(user.profilePic);
            //set profile pic to new one now
            user.profilePic = res1.data.profilePic;
            toast.success("Updated profile picture.");
          }
        }catch (err) {
          console.log("Error");
          
        }

      }

      if (phone){
        user.phone = phone;
        data1.append("phone", phone);
        hasChanaged += 1;
      }
      if (location){
        user.location = location;
        data1.append("location", location);
        hasChanaged += 1;
      }
      if (bio){
        user.bio = bio;
        data1.append("bio", bio);
        hasChanaged += 1;
      }
      if (links){
        user.links = links;
        data1.append("links", links);
        hasChanaged += 1;
      }
      
      console.log(user._id);
      //console.log(auth.token);


      //if only thing they change is profile pic
      if (hasChanaged != 0){
        try {
          let res = await updateProfile(user._id , data1);
          //if (res.data) {
            
            
            //console.log(res.data);

          //}
          toast.success("Updated user.");
        } catch (err) {
          console.log("Error cannot verify user");
          
        }
    }
    };



    return(
      <div className="d-flex justify-content-center">
          
                  <EditAccountForm
                    //handleImageUpload={handleImageUpload}
                    editItem={editItem}
                    oldName={user.name}
                    name={name}
                    setName={setName}
                    profilePic={profilePic}
                    setProfilePic={setProfilePic}
                    phone={phone}
                    setPhone={setPhone}
                    location={location}
                    setLocation={setLocation}
                    bio={bio}
                    setBio={setBio}
                    links={links}
                    setLinks={setLinks}
                  />
             
        </div>
  );

};


export default EditAccount;