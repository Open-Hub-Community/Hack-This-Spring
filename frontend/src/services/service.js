import axios from 'axios';

const api  = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com" // test api
})

const postEmail = (email) => api.post("/posts",email); // /register
const postForm = (details) => api.post("/posts",details);

export {postEmail,postForm}