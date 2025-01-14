import User from "../models/User.js";

const getAllStudents=async (req,res)=>{
    try {
        const users = await User.find(); // Fetch all registered users
        console.log(users)
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: 'Server error-Couldnt fetch the students', error: err.message });
    }
}

export default getAllStudents;