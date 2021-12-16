import React from 'react'
//import Roboto from '../fonts/Roboto'
//import tempPic from './Logo.png';

export default function ConnectUserProfile(props) {
    const {
        name,
        profilePic,
        bio
    } = props
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

    //for profile pic to display
    const mimetype = 'image/png';
    //convert to base 64 to be displayable
    const img = new Buffer.from(profilePic).toString("base64");

    console.log(bio);
    var bio1 = bio;

    //if user has not made bio yet then there wont be errors
    if (bio == undefined){
        bio1 = " ";
    }
    //if bio is long only display a bit of it in mini profile
    else if (bio.length > 70){
        bio1 = bio.substring(0, 70);
    }
    //console.log(bio1); 

    //what is displayed
    return (
        <div style= {styleCard} className = "btn">
            <div className= "card-body" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <div style={styleInside}>
                            <div style={styleAvatar}>
                            <img 
                                src={`data:${mimetype};base64,${img}`}
                                className='card-image-avatar'
                                alt=''
                            />
                            </div>


                            <h5 style={styleHeader}>{name}</h5>
                            
                            <h5 style={styleBio}>"{bio1}..."</h5>

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