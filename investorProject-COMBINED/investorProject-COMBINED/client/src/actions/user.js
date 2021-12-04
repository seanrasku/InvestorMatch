import axios from 'axios';


//Leave code be despite blue underscore, complaining due to await twice, but this
//needs to happen for code to work properly

//Gets all users currently stored in database
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

export const uploadPic = async (token, userId, file) =>{
    let upload = await axios.patch(`${process.env.REACT_APP_API}/user/pic/${userId}`, file, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
    });
    return upload;
}


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

 export const updateProfile = async (id, data) =>{
    let update =  await axios.patch(`${process.env.REACT_APP_API}/user/${id}`, data
        /*headers: {
            Authorization: `Bearer ${token}`,
        },*/
    );
    return update;
}

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