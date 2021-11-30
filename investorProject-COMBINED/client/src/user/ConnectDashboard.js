import DashboardNav from "../components/DashboardNav";
import {React, useState} from 'react'
import { useSelector } from "react-redux";
import {allUsers} from '../actions/user'
import Search from '../components/Search'
import Connect from "../components/Connect";
import SearchBar from "../components/SearchBar"
import TagButton from "../components/TagButton";
const ConnectDashboard = () => {
    const { auth } = useSelector((state) => ({ ...state }));
    const { userTags } = useSelector((state) => ({ ...state }));
    const { user, token } = auth;
    const [searchedTag, setSearchedTag] = useState("")
    const [searchedUsers, setSearchedUsers] = useState([])
    console.log(searchedUsers)
    const setParent = (status, tag) => {
        if(status === true) {
            console.log("Called...")
            getSearchedUsers(tag)
            setSearchedTag(tag)
        }
    }
    const getSearchedUsers = async(tg) =>{
        const all = await allUsers(token)
        //console.log(searchedTag)
        const usableData = all.data.filter((u) => user.userType !== "Admin" && user.userType !== u.userType && u.userType !== "Admin");
        console.log(usableData)
        console.log(tg)
        const foundUsers = usableData.filter((u) => u.tags.some(tag => tag.id === tg.id) === true)
        console.log(foundUsers)
        setSearchedUsers(foundUsers)
        // const searched = all.data.map((u) => {
        //     if(user.userType !== "Admin" && user.userType !== u.userType && u.userType !== "Admin"){
        //             const t = u.tags.some(tag => tag.name === tg.name && tag.community === tg.community)
        //             if(t === true){
        //                 console.log("in truth: ", u)
        //                 console.log(searchedUsers.length)
        //             }
        //         }
            
        // })
        // setSearchedUsers(searched)
        // console.log("In Get: ",searchedUsers)
    }
    
    const styleContainer = {
        marginBottom: '30px',
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'center',
        padding: '10px',
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
            padding: "40px"}}
            >
            <h4 style={{textAlign: 'center', color: 'white'}}>Click on tags to filter your search</h4>
            <div style={styleContainer}>
                {userTags !== null ? Object.entries(userTags).map(([k, t]) => {
                    return (
                    <div className="row">
                        {(t !== null ? <TagButton key = {t._id} data = {t} buttonColor={'#E0FFFF'} setClickState={setParent} /> : <h2>null</h2>)}
                    </div>
                    )        
                }) : <div>No Tags Found</div>} 
            </div>


            <div>
                <Connect searchedUsers={searchedUsers}/>:
            </div> 
        </div>
    </div>

       
        
    )
}
export default ConnectDashboard;