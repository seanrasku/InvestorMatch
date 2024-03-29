import {React, useState, useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import {allTags} from '../actions/tag'
import TagButton from './TagButton'
import {getUser, addTagtoAccount } from '../actions/user';
import { toast } from 'react-toastify';

//this page displays the tags



const Interests = () => {   
    const dispatch = useDispatch(); 
    const { auth } = useSelector((state) => ({ ...state }));
    const {user, token} = auth
    const [separateByCommunity, setCommunitySep] = useState({
      place: [],
      identity: [],
      interest: [],
    })
    const [tagtoadd, setTagAdd] = useState({})
    const [buttonClickState, setClickState] = useState({
      clickStatus: false,
      tag: {},
    })
    const styleObj = {
      textAlign: 'center',
    }
    const styleText = {
      fontWeight: "bold",
      fontSize: 17,
    }

    const styleContainerPl = {
      marginBottom: '30px',
      display: 'flex',
      flexFlow: 'row wrap',
      justifyContent: 'center',
      padding: '10px',
      
  }

  const styleContainerId = {
    marginBottom: '30px',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    padding: '20px',
  }

  const styleContainerInt = {
    marginBottom: '30px',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    padding: '20px',
  }
    useEffect(() => {
      loadTags();
    }, [tagtoadd]);

    //gets click status and if true adds tags to user account
    const setParent = (status, tag) => {
      if(status === true){
        addTagstoAccount(tag)
      }
      setClickState({
        clickStatus: false,
        tagName: tag
      })
    }
    //implementation to add tag to user account
    const addTagstoAccount = async(tag) =>{
      const userId = user._id;
      const tagId = tag._id;
      try{
          const u = await getUser(user._id, token)
          const dup = u.data.tags.filter(t => t.id === tag._id)
          console.log("DUP TAG? ===> ", dup)
          if(dup[0]!== undefined) return toast.error("Tag Already Exists")
          let updatedUser = await addTagtoAccount(token, tag.name, userId, tagId)
          setTagAdd(tag)
          const dispatchTag = {id: tag._id, name: tag.name, community: tag.community}
               dispatch({
            type: "ADD_TO_CURR_USER_TAGS",
            payload: dispatchTag
          })
          window.localStorage.setItem('tag', JSON.stringify(updatedUser.data.tags))
      }catch(err){
          console.log(err);
      }
  }
    //loads all available tags on page alphabetically
    const loadTags = async () => {
      let tags = await allTags(token)
      setCommunitySep({
        place: tags.data.filter(t => t.community === "Place").sort((a, b) => a.name.localeCompare(b.name)),
        identity: tags.data.filter(t => t.community === "Identity").sort((a, b) => a.name.localeCompare(b.name)),
        interest: tags.data.filter(t => t.community === "Interest").sort((a, b) => a.name.localeCompare(b.name))
      })
  };

    //displays all available tags and waits for click, on click calls method to add tag to account
    return(
      <div>
        <div style={{
                backgroundColor: "#BED2DD",
                padding: "50px",
                borderRadius: "10px"}}>
  
                <div style={styleObj}>
                  <h5 style={styleText}>Communities of Place</h5>
                </div>

                <div style={styleContainerPl}>
                  {separateByCommunity.place
                    .map((t) => {
                        return(
                        
                          <TagButton 
                            key = {t._id} 
                            data = {t}  
                            buttonColor={'lightgreen'} 
                            setClickState={setParent} 
                          />
                        )
                      }
                        )}
                </div>

                <div style={styleObj}>
                  <h5 style={styleText}>Communities of Identity</h5>
                </div>
                <div style={styleContainerId}>
                  {separateByCommunity.identity.map((t) => {
                      return(
                        <TagButton 
                          key = {t._id} 
                          data = {t} 
                          buttonColor={'#1FC5B2'}
                          setClickState={setParent} 
                        />
                      )
                    })}
                </div> 

                <div style={styleObj}>
                  <h5 style={styleText}>Communities of Interest</h5>
                </div>

                <div style={styleContainerInt}>
                  {separateByCommunity.interest.map((t) => {
                    return(
                      <TagButton 
                        key = {t._id} 
                        data = {t} 
                        buttonColor={'#00BFFF'} 
                        setClickState={setParent} 
                      />
                    )                  
                  })}
                </div>
              </div>
          </div>

    );
    
};

export default Interests;