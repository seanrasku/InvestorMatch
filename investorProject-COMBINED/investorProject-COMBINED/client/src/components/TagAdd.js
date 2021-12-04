import {React, useState, useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";

import {createTag} from '../actions/user'

export default function TagAdd() {

    const dispatch = useDispatch();
    const { auth } = useSelector((state) => ({ ...state }));

    const { user, token } = auth;
    const {tagToAdd} = props
    
    const handleClick = async() =>{
        const userId = user._id;
        try{
            let addedTag = await createTag(token, tagToAdd.name, userId)
            

        }catch(err){
            console.log(err);
        }
    }
    return (
        <div>
            
        </div>
    )
}
