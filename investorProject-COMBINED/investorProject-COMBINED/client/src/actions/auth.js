import axios from "axios";

//Gets current user's information and uses axios to post for creation
export const register = async (user) =>
  await axios.post(`${process.env.REACT_APP_API}/register`, user);


//Gets current user's information and uses axios to post for login
export const login = async (user) =>
  await axios.post(`${process.env.REACT_APP_API}/login`, user);
