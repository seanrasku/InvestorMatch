import React from 'react'
import { useSelector } from "react-redux";
// import { Card, Avatar } from "antd";
// const { Meta } = Card;

const Account = () => {    
    const { auth } = useSelector((state) => ({ ...state }));
    const { user } = auth;
    const styleObj = {
        fontSize: 18,
        fontFamily: 'Helvetica',

    }
    const styleAvatar = {
        width: "15px",
        margin: "auto",
    }
    return(
        <div>
            <div className="card-body">
                <div style={{
                    width: "80%",
                    margin: "auto",
                    backgroundColor: "#BED2DD",
                    padding: "50px",
                    borderRadius: "10px"}}>
                    <div style={{textAlign:'center', height:'140px',}}>
                        <img 
                            style={{float: 'left'}}
                            src={user.profilePic}
                            className='card-image-avatar'
                            alt=''
                        />
                        <span style={{
                        fontSize: 28,
                        fontWeight: 'bold',
                        fontFamily: 'Helvetica',}}>{user.name}</span>
                        <span style={{
                        marginLeft:'10px',
                        fontSize: 24,
                        fontFamily: 'Helvetica',}}>{user.userType}</span>
                    </div>
                    <div style={{textAlign:'center'}}>
                        <span style={styleObj}>{user.location}</span>
                    </div>
                    <div style={{marginTop:'20px'}}>
                        <span style={styleObj}>{user.bio}</span>
                    </div>
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
                        fontFamily: 'Helvetica',}}>Tags</span>
                    </div>
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
                        fontFamily: 'Helvetica',}}>Opportunity</span>
                    </div>
                    <span style={{fontSize: 20}}>{user.opportunity}</span>
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
                        fontFamily: 'Helvetica',}}>Story</span>
                    </div>
                    <div style={styleAvatar}>
                    <img 
                        src={user.storyPic}
                        className='card-image-avatar'
                        alt=''
                    />
                    </div>
                    <span style={{fontSize: 20}}>{user.story}</span>
                </div>
            </div>
        </div>
    );

};


export default Account;