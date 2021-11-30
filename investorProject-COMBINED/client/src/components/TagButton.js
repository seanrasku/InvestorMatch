import {React, useState, useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import tempPic from './Logo.png';
import { toast } from "react-toastify";

import {addTagtoAccount} from '../actions/user'
export default function TagButton(props) {

    const dispatch = useDispatch();
    const { auth } = useSelector((state) => ({ ...state }));

    
    const { user, token } = auth;
    const {data, buttonColor, setClickState} = props
    const buttonStyle ={
        display: "block",
        textAlign: "center",
        background: "none",
        marginTop: "10px",
        paddingTop: "10px",
        paddingBottom: "10px",
        width: "180px",
        borderRadius: "8px",
        color: "black",
        backgroundColor: buttonColor
        
    }

    return (
        <div>
            <button
            style={buttonStyle}
            data = {data}
            onClick={() => {setClickState(true, data)}}
            >
                {data.name}
            </button>
        </div>
    )
}