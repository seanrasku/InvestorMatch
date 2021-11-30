import React from 'react'
import { useSelector, useDispatch} from "react-redux";
import {toast} from 'react-toastify';
import {useState, useEffect} from 'react'
import {addTag, deleteTag, updateTag} from "../actions/admin"
import { allTags } from '../actions/tag';
import { allUsers } from '../actions/user';
import {displaySearchedUsers} from '../components/Search'
import ConnectUserProfile from './ConnectUserProfile';
const SearchBar = (props) => {
    const { auth } = useSelector((state) => ({ ...state }));
    const { user, token } = auth;
    const {setMatchState} = props
    const [queries, setQuery] = useState("");
    const submitStyle = {
        marginLeft: '30px',
       
    }

    useEffect(() => {
        // searchedUsers.map((u) => {
        //     <ConnectUserProfile name={u.name} userType={u.userType} bio={u.bio}/>
        //     console.log(u)
        // })
    }, [])
    const handleInput = async(query) =>{
        const all = await allUsers(token)
        console.log(query)
        setQuery(query)
        //setSearchTerm(query)
        console.log(all)
        //if(searchedUsers.length === 0){
        all.data.map((u) => {
            if(user.userType !== "Admin" && user.userType !== u.userType && u.userType !== "Admin"){
                    const t = u.tags.some(tag => tag.name === query)
                    if(t === true){
                        console.log("in truth: ", u)
                      //  setSearchedUsers([...searchedUsers, u])
                        setMatchState(u, true)
                    }
                    else{setMatchState(u, false)}
                }
            //}
        })
    //}
       // setSearchedUsers([])

        //handleSubmit()
       // console.log("SEARCHED: ", searchedUsers)
    }
    // function handleSubmit() {        
    //     return (
    //         <div>
    //         {searchedUsers[0] !== null ? searchedUsers.map((u) => {
    //             console.log(u)
    //             return(
    //             <div>
    //             <h2>BUMMM</h2>
    //             <ConnectUserProfile key={u._id} name={u.name} userType={u.userType} bio={u.bio}/>
    //             </div>
    //             ); 
    //         }) : <h5>No Users Found!</h5>}
    //     </div>
    //     )
    // }
    return(
    <>
    <form >
        <input 
        type="text" 
        placeholder="Search By Tags" 
        onBlur={(e) => handleInput(e.target.value)}
        />
        
        <button 
            style={submitStyle} 
            className="btn btn-primary"
            onClick={(e) => e.preventDefault()}
        >
            Submit
        </button>
        
        <div>
            
        </div>
    </form>

    </>
    );
};

export default SearchBar;