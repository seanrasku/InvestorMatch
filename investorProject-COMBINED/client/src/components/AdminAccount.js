import React from 'react'
import { useSelector, useDispatch} from "react-redux";
import {toast} from 'react-toastify';
import {useState, useEffect} from 'react'
import {addTag, deleteTag, updateTag} from "../actions/admin"
import {deleteUserTag, getUser} from '../actions/user'
import { allTags, getSpecificTag } from '../actions/tag';
import {allUsers} from '../actions/user'
const AdminAccount = () => { 

    const dispatch = useDispatch()
    const { auth } = useSelector((state) => ({ ...state }));
    const { user, token } = auth;
  
    //add tag to tag database
    const handleTagAdd = async(tagAndCommunity) =>{
      try{
        const split= tagAndCommunity.split('\n')
        if(split.length !== 2) return

        const body = {name: split[0], community: split[1]}
        const all = await allTags(token);
        const check = all.data.filter(t => t.name === split[0] && t.community == split[1])
        console.log(check)
        if(check[0] !== undefined) return toast.error("Duplicate Tag or Tag Not Able To Be Added")
        let newTag = await addTag(token, body, user._id)
        console.log(newTag)
        toast.success("Success!")
        dispatch({
          type: "TAGS_ADDED",
          payload: newTag
        })

      }catch(err){
        console.log(err)
      }
    }

    //delete tag from tag database
    const handleTagDelete = async(tagName) =>{
      try{
        const split = tagName.split('\n')
        if(split.length !== 2) return

        console.log(split)
        let allT = await allTags(token);
        console.log(allT)
        const tagToDelete = allT.data.filter(t => t.name === split[0] && t.community == split[1])
        console.log(tagToDelete)
        if(tagToDelete[0] !== undefined){
          removeTagsFromUsers(tagToDelete[0])
        }
      }catch(err){
        console.log(err)
      }
    }
    //update tag in tag database

    const handleTagUpdate = async(allThree) => {
      try{
        const split = allThree.split('\n')
        if(split.length !== 4) return

        let tagList = await allTags(token);
        const tagToUpdate = tagList.data.filter(t => t.name === split[0] && t.community === split[1])
        const body = {name: split[2], community: split[3]}
        let updTag = await updateTag(token, body, user._id, tagToUpdate[0]._id)
        if(!updTag) return toast.error("Tag Could Not Be Deleted") 
        toast.success("Success!")
        console.log(updTag)
      }catch(err){
        console.log(err)
      }
    }

    //thorough delete, deletes selected tag to delete from all users
    const removeTagsFromUsers = async(userTagtoDelete) =>{
      try{
        const all = await allUsers(token)
        console.log("Before Removal: ", all)
        console.log(userTagtoDelete)
        all.data.map(async (u) => {
          const t = u.tags.filter(uTag => uTag === userTagtoDelete.name)
          if(t.length !== 0){
            const userafterDel = await getUser(u._id, token)
            dispatch({
              type: "UPDATE_CURR_USER_TAGS",
              payload: userafterDel.data.tags
          })
          window.localStorage.setItem('tag', JSON.stringify(userafterDel.data.tags))
          console.log("After User Tag Deletion: ", userafterDel)
          }
        })
    }catch(err){
      console.log(err)
    }
  }
    //submit handler for form
    const handleAddSubmit = async(event) => {
      try{
      event.preventDefault();
      }catch(err){
        if(err.response.status(400)) return toast.error(err.response.data)
      }
    }

    //explains how to use admin account, then creates textboxes for inputting tag and community to perform action on, returns action selected
    return(
        <div className="col-md-8">
              <div className="mb-3">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <h1 className="mb-0 p-1">Admin</h1>
                    </div>

                    <div className="row-sm-3 p-2">
                        <p className="mb-0">
                          As an Admin, you have multiple priveleges. On this page, there are three inputs,
                          and they will allow you to add a tag, update an existing tag, and delete a
                          tag. These will connect directly to the database, so no further steps are
                          necessary when adding, updating, or deleting tags. Log into the database for 
                          any further actions.
                          Note: You must include a community with each tag. Currently, type "Place" for
                          Community of Place, "Interest" for Community of Interest, and "Identity" for
                          Community of Identity.
                        </p>
                    </div>
                    <div className="col-sm-12 mb-5">
                      <form onSubmit={handleAddSubmit} className="mt-3">
                        <textarea 
                          type="text" 
                          placeholder="Enter Tag to Add Here, Enter Community Here" 
                          onBlur={(e) => handleTagAdd(e.target.value)}
                        />
                        <button 
                      
                        className="btn btn-primary">Submit</button>
                      </form>
                      <form className="mt-3">
                        <textarea 
                          type="text" 
                          placeholder="Tag To Delete Here, Enter Community Here" 
                          onBlur={(e) => handleTagDelete(e.target.value)}
                        />
                        <button className="btn btn-primary">Submit</button>
                      </form>
                      <form className="mt-3">
                        <textarea 
                          type="text" 
                          placeholder="Tag to Update Here, New Tag Name Here, New Community Here" 
                          onBlur={(e) => handleTagUpdate(e.target.value)}
                        />
                        <button 
                        
                        className="btn btn-primary"
                        >
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
    );
    
}

export default AdminAccount;