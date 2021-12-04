import React from 'react'
//import Roboto from '../fonts/Roboto'
import tempPic from './Logo.png';

export default function ConnectUserProfile(props) {
    const {
        name,
        userType,
        bio
    } = props
    const styleObj = {
        fontSize: 20,
        fontFamily: "Helvetica",
        marginTop: "10px",
       // textAlign: "center",
        fontWeight: '200',
    }
    const styleHeader = {
        fontSize: 21,
        marginTop: '10px',
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
        textAlign: "center",
    }
    const styleBio ={
        fontSize: 13,
        marginTop: "15px",
        fontFamily: 'Helvetica',
        fontWeight: '200',
        textAlign: "center",
    }
    const styleAvatar = {
        width: "15px",
        marginRight: '90px'
    }
    const styleCard= {
        width: 320,
        height: 320,
        backgroundColor: '#F5FCFF',
        marginTop: "10px",
        marginLeft: '10px',
        border: "solid 1px ", 
        cursor: "pointer",
    }

    const styleInside = {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        width: 'auto',
        justifyContent: 'flex-end',
        alignItems: 'center',
    }
    return (
        <div style= {styleCard} className = "btn">
            <div className= "card-body" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <div style={styleInside}>
                            <div style={styleAvatar}>
                                <img 
                                    src={tempPic}
                                    className='card-image-avatar'
                                    alt=''
                                />
                            </div>


                            <h5 style={styleHeader}>{name}</h5>
                            <h5 style={styleObj}>{(userType === "SocialVenture" ? "Social Venture" : "Investor")}</h5>
                            <h5 style={styleBio}>"{bio}"</h5>

                        <button 
                            className={"btn btn-success"} 
                            style={{width: 'auto', marginBottom: "10px"}}
                            >
                            Match with {name}!
                        </button>
                    </div>
                
            </div>  
        </div>
    )
}