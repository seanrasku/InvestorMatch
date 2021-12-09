import axios from 'axios';


//Leave code be despite blue underscore, complaining due to await twice, but this
//needs to happen for code to work properly

//Gets all users currently stored in database
export const allUsers = async (token) =>{
    try{
    return await axios.get(`${process.env.REACT_APP_API}/user`, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });
    }catch(err){
        console.log("ERROR: ", err)
    }
}

//helper to get specific user from database
export const getUser = async (userId, token) =>{
    try{
        return await axios.get(`${process.env.REACT_APP_API}/user/${userId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    }catch(err){
        console.log("ERROR: ", err)
    }
}

//helper to send the data of picture uploaded from the front end
//and store it in the database with the associated user
export const uploadPic = async (token, userId, file) =>{
    let upload = await axios.patch(`${process.env.REACT_APP_API}/user/pic/${userId}`, file, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
    });
    return upload;
}

//helper to add tag to be associated with ths user in backend 
export const addTagtoAccount = async (token, body, userId, tagId) => {
    try{
        return await axios.post(`${process.env.REACT_APP_API}/user/${userId}/${tagId}`, body, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
    }catch(err){
        console.log("ERROR: ", err)
    }
    
 }

 //helper that takes the changes made to user in front end and saves them to 
 //the database
 export const updateProfile = async (id, data) =>{
    let update =  await axios.patch(`${process.env.REACT_APP_API}/user/${id}`, data
        /*headers: {
            Authorization: `Bearer ${token}`,
        },*/
    );
    return update;
}

//helper that communicated with the database to delete the tag that was
//once associated with this user
export const deleteUserTag = async (token, userId, tagId) =>{
    try{
        const delUTag = await axios.delete(`${process.env.REACT_APP_API}/user/${userId}/${tagId}`,{
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return delUTag
    }catch(err){
        console.log(err)
    }
}