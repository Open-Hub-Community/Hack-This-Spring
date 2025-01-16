import axios from 'axios';

const api  = axios.create({
    baseURL: "https://hack-this-spring.onrender.com" //"https://jsonplaceholder.typicode.com" // test api
})

const postForm = (details) => api.post("/register",details); // /register
const postAdmin = (admin) => api.post("/admin",admin);
const postNewsLetter = (email)=> api.post("/newsletter",email)

export {postForm,postAdmin,postNewsLetter}