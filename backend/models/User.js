import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true,
        match: /^\d{10}$/
    },
    college: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 100
    },
    semester: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        maxlength: 20
    }
}, { timestamps: true });

export default mongoose.model('User', UserSchema);