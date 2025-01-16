import mongoose from 'mongoose';


const connectDb=async (url)=>{
    try{
        await mongoose.connect(url);
    }catch(err){
        console.log(err,'database not connected')
    }
}

export default connectDb;