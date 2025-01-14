import axios from 'axios';

const api  = axios.create({
    baseURL: "https://5a10-117-96-42-245.ngrok-free.app" //"https://jsonplaceholder.typicode.com" // test api
})

const postEmail = (email) => api.post("/posts",email); //  /register
const postForm = (details) => api.post("/register",details); // /register
const postAdmin = (admin) => api.post("/admin",admin);

export {postEmail,postForm,postAdmin}