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
    //console.log(auth);
    const { user } = auth;
    //console.log(user);
    const [name, setName] = useState("");
    const [profilePic] = useState("");
    const [phone, setPhone] = useState("");
    const [location, setLocation] = useState("");
    const [bio, setBio] = useState("");
    const [links, setLinks] = useState("");
    const [story, setStory] = useState("");
    const [opportunity, setOpportunity] = useState("");
    const [storyPic] = useState("");

    const styleObj = {
        fontSize: 18,
        fontFamily: 'Helvetica',
    }
    // upload story picture
    const handleStoryImageUpload = e => {
      const file = e.target.files[0];
      getBase64(file).then(base64 => {
        user.storyPic = base64;
        // console.debug("file stored",base64);
      });
    };
    // upload profile picture
    const setProfilePic = e => {
      const file = e.target.files[0];
      getBase64(file).then(base64 => {
        user.profilePic = base64;
        // console.debug("file stored",base64);
      });
    };
  
    // trans picture file as 'base64' and save in database
    const getBase64 = (file) => {
      return new Promise((resolve,reject) => {
         const reader = new FileReader();
         reader.onload = () => resolve(reader.result);
         reader.onerror = error => reject(error);
         reader.readAsDataURL(file);
      });
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
      if (story){
        user.story = story;
      }
      if (opportunity){
        user.opportunity = opportunity;
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
                    handleStoryImageUpload={handleStoryImageUpload}
                    setProfilePic={setProfilePic}
                    editItem={editItem}
                    oldName={user.name}
                    name={name}
                    setName={setName}
                    profilePic={profilePic}
                    phone={phone}
                    setPhone={setPhone}
                    location={location}
                    setLocation={setLocation}
                    bio={bio}
                    setBio={setBio}
                    setStory={setStory}
                    setOpportunity={setOpportunity}
                    links={links}
                    setLinks={setLinks}
                  />
             
        </div>
  );

};


export default EditAccount;