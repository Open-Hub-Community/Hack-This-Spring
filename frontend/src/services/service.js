import axios from 'axios';

const api  = axios.create({
    baseURL: "https://f050-117-96-40-84.ngrok-free.app" // "https://jsonplaceholder.typicode.com" // test api
})

const postEmail = (email) => api.post("/register",email); // /register
const postForm = (details) => api.post("/posts",details);

export {postEmail,postForm}