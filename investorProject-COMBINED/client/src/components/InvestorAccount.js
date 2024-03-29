import {React} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { deleteUserTag } from "../actions/user";
import Tag from '../components/Tag';


//this is what is displayed under my profile when the user is an investor

const InvestorAccount = () => {
    const dispatch = useDispatch();    
    const { auth } = useSelector((state) => ({ ...state }));
    const { userTags } = useSelector((state) => ({ ...state }));
    const { user } = auth;
    const {token} = auth;
    const {data} = user.profilePic.Data;

    const styleObj = {
      fontSize: 24,
      textAlign: 'center',
      fontFamily: "sans-serif"
    }

    const styleDiv = {
      display: 'flex',
      height: '100%',
      padding: "20px",
  
    }


    //whats needed for image to display, we need to convert to base 64
    const mimetype = 'image/png';
    const img = new Buffer.from(data).toString("base64");
   
    console.log("INV TAGS IN STATE =======>>>: ", userTags)
    const handleTagDel = async(tagDel) =>{
    const temp = [...userTags]
    const delTag = await deleteUserTag(token, user._id, tagDel.id)
    console.log("TAG DELETED ======>>>>>", delTag)
    const newTags = temp.filter(t => t.id !== tagDel.id)
    dispatch({
      type: "DEL_USER_TAG",
      payload: newTags,
    })
    window.localStorage.setItem("tag", JSON.stringify(newTags))
  }


    //display all clicked tags on account, along with information about user
    return(
      <div>
      <div
            style={{
              backgroundColor: "#BED2DD",
              padding: "50px",
              borderRadius: "10px"}}>
        
        
        <img className="text-center" src = {`data:${mimetype};base64,${img}`} width="200px" height="200px" />
        
        <div className="row justify-content-center">

        <p style={styleObj}>{user.name}</p>
                  
        <h5>Email:</h5>
                  
        <p style={styleObj}>{user.email}</p>
              
        <h5>Phone:</h5>
                  
        <p style={styleObj}>{user.phone}</p>
                  
        <h5>Address:</h5>
                  
        <p style={styleObj}>{user.location}</p>
                
        <h5>Bio:</h5>
        <p style={styleObj}>{user.bio}</p>
        </div>            
    
        <div style={{border: "double", borderRadius: '5px', padding: '10px', width: '400px', backgroundColor: '#ADD8E6', alignContent: "center"}}>
                <h2 style={{marginLeft: '20px', textDecoration: 'underline'}}>{user.name}'s Tags</h2>
                <div>
                {userTags !== null ? userTags.map((tag) => {
                  return(
                    <div key={tag._id} style={styleDiv}>
                      <Tag key={tag.id} name={tag.name}/>
                      <button 
                        className={"btn"} 
                        style={{marginLeft: '50px', marginTop: '9px', height: '51px', width: '51px'}} 
                        onClick={() => handleTagDel(tag)}>
                          &times;
                      </button>
                    </div>
                  )
                }): <h5 style={{color: '#D2691E'}}>No Tags Found!</h5>}   
                </div>
        </div>
      </div>
      </div>
    );
    
};

export default InvestorAccount;