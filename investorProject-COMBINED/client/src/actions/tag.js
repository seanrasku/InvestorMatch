import axios from 'axios';

//Leave code be despite blue underscore, complaining due to await twice, but this
//needs to happen for code to work properly
//creates a tag, auth must be admin
export const createTag = async (token, userId, name) =>{
    try{
        return await axios.post(`${process.env.REACT_APP_API}/tag/${userId}`, name, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    }catch(err){
        console.log(err)
    }
}

//updates a tag, auth must be admin
export const updateTag = async (token, data, userId, tagId) =>{
    console.log("DATA: ", data)
    try{
        return await axios.patch(`${process.env.REACT_APP_API}/tag/${userId}/${tagId}`, {name: data}, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    }catch(err){
        console.log(err)
    }
}

//deletes a tag, auth must be admin
export const deleteTag = async (token, userId, tagId) =>{
    try{
        return await axios.delete(`${process.env.REACT_APP_API}/tag/${userId}/${tagId}`,{
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    }catch(err){
        console.log(err)
    }
}

export const allTags = async (token) =>{
    try{
        return await axios.get(`${process.env.REACT_APP_API}/tags`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    }catch(err){
        console.log(err)
    }
}
export const getSpecificTag = async(token, tagId) => {
    try {
        const t = await axios.get(`${process.env.REACT_APP_API}/tag/${tagId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }})
        return t;
    }catch(err){
        console.log(err)
    }
}
