import User from "../models/User.js";
import Subscriber from "../models/Subscriber.js";

const getAllStudents=async (req,res)=>{
    try {
        const users = await User.find(); // Fetch all registered users
        console.log(users)
        const subscribers = await Subscriber.find(); // Fetch all registered users
        console.log(subscribers)
        res.json([users?.length ? users : [], subscribers?.length ? subscribers : []]);
    } catch (err) {
        res.status(500).json({ message: 'Server error-Couldnt fetch the students', error: err.message });
    }
}




export default getAllStudents;