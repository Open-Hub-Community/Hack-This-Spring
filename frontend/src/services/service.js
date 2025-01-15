import axios from 'axios';

const api  = axios.create({
    baseURL: "https://3af6-117-96-41-105.ngrok-free.app" //"https://jsonplaceholder.typicode.com" // test api
})

const postForm = (details) => api.post("/register",details); // /register
const postAdmin = (admin) => api.post("/admin",admin);
const postNewsLetter = (email)=> api.post("/newsletter",email)

export {postForm,postAdmin,postNewsLetter}