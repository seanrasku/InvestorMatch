import axios from 'axios'

export const addTag = async(token, body, userId) => {
    try{
        return await axios.post(`${process.env.REACT_APP_API}/tag/${userId}`, body, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
    }catch(err){
        console.log("ERROR: ", err)
    }
}

export const deleteTag = async(token, userId, tagId) => {
    try{
        return await axios.delete(`${process.env.REACT_APP_API}/tag/${userId}/${tagId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    }catch(err){
        console.log(err)
    }
}

export const updateTag = async(token, body, userId, tagId) => {
    try{
        return await axios.patch(`${process.env.REACT_APP_API}/tag/${userId}/${tagId}`, {name: body}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    }catch(err){
        console.log(err)
    }
}