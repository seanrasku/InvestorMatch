import DashboardNav from "../components/DashboardNav";
import {React, useState, useEffect} from 'react'
import { useSelector } from "react-redux";
import {allUsers} from '../actions/user'
import Connect from "../components/Connect";
import TagButton from "../components/TagButton";
import Tag from "../components/Tag";
const ConnectDashboard = () => {
    const { auth } = useSelector((state) => ({ ...state }));
    const { userTags } = useSelector((state) => ({ ...state }));
    const { user, token } = auth;
    const [searchedUsers, setSearchedUsers] = useState([])
    const [searchedTags, setSearchedTags] = useState([])
    console.log(searchedUsers)
    const setParent = (status, tag) => {
        if(status === true) {
            console.log("Called...")
            setSearchedTags([...searchedTags, tag])
            getSearchedUsers(tag)
        }
    }

    const getSearchedUsers = async(clickedTag) => {
        console.log(searchedUsers)
        if(searchedUsers.length === 0){
            const all = await allUsers(token);
            const usableData = all.data.filter((u) => user.userType !== "Admin" && user.userType !== u.userType && u.userType !== "Admin");
            const foundUsers = usableData.filter(u => u.tags.some(tag => tag.id === clickedTag.id));
            setSearchedUsers(foundUsers)
            setSearchedTags([...searchedTags, clickedTag])
        }
        else{
            const filteredUsers = searchedUsers.filter(u => u.tags.some(tag => tag.id === clickedTag.id))
            setSearchedUsers(filteredUsers) 
            setSearchedTags([...searchedTags, clickedTag])
        }
    }
    
    function handleClick() {
        setSearchedTags([])
        setSearchedUsers([])
    }
    function handleDelete(id) {
        // const newTags = searchedTags.filter(t => t.id != id)
        // const newUsers = searchedUsers.filter(u => u.tags.some(t => t.id === id) === false)
        // newTags.map((tag) => {
        //     getSearchedUsers(tag)
        // })
        // //setSearchedUsers(newUsers)
        // setSearchedTags(newTags)
        console.log('to fix')
    }
    const styleContainer = {
        marginBottom: '30px',
        
        display: 'flex',
        flexFlow: 'row wrap',
        //justifyContent: 'center',
        padding: '10px',
        border: 'double',
        borderRadius: '10px',
        backgroundColor: '#BED2DD'
    }
    const styleSearches = {
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'center',
        //width: '20%',
        borderRadius: '10px',
        border: 'double',
        backgroundColor: '#BED2DD',


    }
    const styleDashboard = {
        display: 'flex',
        justifyContent: 'spaceAround',
        alignItems: 'flex-start',
        
        // flexDirection: 'column',
        // justifyContent: 'center',
        // flexBasis: '100%',
        // flex: '1',
    }
  return (  
    <div>
        <div>
        <DashboardNav />
        </div>

        <div className="container-fluid"
            style={{
            backgroundColor: "#006FAA",
            fontFamily: "sans-serif",
            padding: "40px"
            }}
        >
            <h4 style={{textAlign: 'center', color: 'white'}}>Click on tags to filter your search</h4>
            
            <div style={styleContainer}>
                {userTags.length > 0 ? userTags.map(t => {
                    return (
                    <div className="row">
                        {(t !== null ? <TagButton key = {t._id} data = {t} buttonColor={"#E0FFFF"}setClickState={setParent} /> : <h2>null</h2>)}
                    </div>
                    )        
                }) : <h6 style={{color: 'black', textAlign: 'center', paddingBottom: '50px', paddingTop: '50px'}}>No Tags Found</h6>} 
            </div>
            <div style={{display: 'flex', justifyContent: "center"}}>
            <button 
            className={'btn btn-danger'}
            style={{marginBottom: '50px', marginTop: '10px', padding: '15px'}}
            onClick = {() => handleClick()}>
                Clear Search
            </button>
            </div>

            <div style={styleDashboard}>
                <div style={styleSearches}>
                <h5 style={{color: 'black', paddingTop: "20px"}}>Tags You've Searched</h5>

                    {searchedTags.map(tag=> {
                        return(
                        <div style={{display: 'flex', flexFlow: 'row wrap', padding: '20px', paddingBottom: '10px', justifyContent: "center"}}>
                        <Tag key={tag.id} name={tag.name}/>
                        <button 
                        className={"btn btn-danger"} 
                        style={{marginTop: '20px', paddingLeft: '20px', paddingRight: '20px'}}
                        onClick={() => handleDelete(tag.id)}
                        > 
                        &times;
                        </button>
                        </div>
                        )
                    })}
                </div>
                <Connect searchedUsers={searchedUsers}/>:
            </div> 
        </div>
    </div>

       
        
    )
}
export default ConnectDashboard;