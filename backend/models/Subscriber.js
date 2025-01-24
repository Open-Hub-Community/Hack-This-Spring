import mongoose from "mongoose";

const SubscriberSchema= new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    }
});
export default mongoose.model('Subscriber',SubscriberSchema);