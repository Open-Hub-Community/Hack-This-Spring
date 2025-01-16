import axios from 'axios';

const api  = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL
})

const postForm = (details) => api.post("/register",details); // /register
const postAdmin = (admin) => api.post("/admin",admin);
const postNewsLetter = (email)=> api.post("/newsletter",email)

export {postForm,postAdmin,postNewsLetter}
