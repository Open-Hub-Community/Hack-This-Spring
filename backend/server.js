import express from 'express'
import mongoose from 'mongoose';
import connectDb from './config/DBconn.js';
import cors from 'cors'
import register from './routes/registerRoute.js';
import admin from './routes/adminRoute.js';
import newsletter from './routes/newsletterRoute.js';
import health from './routes/healthRoute.js';
const app=express();
const PORT=process.env.PORT ||8000;

app.use(cors());
app.use( express.urlencoded({extended:false}) );
app.use(express.json());

app.use('/register',register);
app.use('/admin',admin);
app.use('/newsletter',newsletter);
app.use('/health', health);
connectDb(process.env.DATABASE_URI)
mongoose.connection.once('open',()=>{
    console.log('Connected to Database....')
    app.listen(PORT,()=>console.log(`Server running on port ${PORT}......`))
})
