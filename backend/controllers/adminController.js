import User from "../models/User.js";
import Subscriber from "../models/Subscriber.js";

const getAllStudents=async (req,res)=>{
    try {
        const [users, subscribers] = await Promise.all([
            User.find(), // Fetch all registered users
            Subscriber.find() // Fetch all subscribers
        ]);
        res.json([users?.length ? users : [], subscribers?.length ? subscribers : []]);
    } catch (err) {
        res.status(500).json({ message: 'Server error-Couldnt fetch the students', error: err.message });
    }
}




export default getAllStudents;