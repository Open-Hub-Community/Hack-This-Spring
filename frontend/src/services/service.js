import axios from 'axios';

const api  = axios.create({
    baseURL: "https://f946-117-96-42-97.ngrok-free.app/" //"https://jsonplaceholder.typicode.com" // test api
})

const postEmail = (email) => api.post("/posts",email); //  /register
const postForm = (details) => api.post("/register",details); // /register
const postAdmin = (admin) => api.post("/admin",admin);

export {postEmail,postForm,postAdmin}