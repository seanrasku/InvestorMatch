import Connect from './Connect'
import {React, useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import {allUsers} from '../actions/user'
import TagButton from "../components/TagButton";

const Search = async(props) => {
    const {searchedTag} = props;
    //const { auth } = useSelector((state) => ({ ...state }));
    const { userTags } = useSelector((state) => ({ ...state }));
    const [users, setUsers] = useState([])
    
    return (
        <div>
            <Connect searchedUsers = {users} />
        </div>
    ) 
}
export default Search
