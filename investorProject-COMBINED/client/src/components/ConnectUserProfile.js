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
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        width: 360,
        height: 300,
        // justifyContent: 'center',
        // alignContent: 'center',
        backgroundColor: '#F5FCFF',
        //padding: "30px",
        marginTop: "10px",
        border: "solid 1px ", 
        cursor: "pointer",
    }

    const styleGrid = {
        display: 'flex',
        alignContent: 'center'

    }
    const styleElements = {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center'
        //alignItems: 'center',
        //alignContent: 'space-between'
    }
    const styleInside = {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        width: '180px',
        justifyContent: 'flex-end',
        alignItems: 'center'
    }
    return (
        <div style= {styleCard} className = "btn">
            <div className= "card-body" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <div style={styleGrid}>
                <div style={styleInside}>
                
                <div style={styleElements}>
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
                </div>

                <button 
                    className={"btn btn-success"} 
                    style={{height: '30px', width: '180px'}}>
                    Match with {name}!
                </button>
                </div>
                
                </div>

            </div>  
        </div>
    )
}