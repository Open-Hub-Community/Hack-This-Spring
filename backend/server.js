import express from 'express'
import mongoose from 'mongoose';
import connectDb from './config/DBconn.js';
const app=express();
const PORT=process.env.PORT ||8000;




connectDb(process.env.DATABASE_URI)
mongoose.connection.once('open',()=>{
    console.log('Connected to Database....')
    app.listen(PORT,()=>console.log(`Server running on port ${PORT}......`))
})