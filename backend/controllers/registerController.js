import User from "../models/User.js";
import sendConfirmationEmail from "../services/emailService.js";

const handleNewRegistration = async (req, res) => {
    const { name, email, phoneNumber, college, semester,gender, agree } = req.body;
    // Validate required fields
    if (!name || !email || !phoneNumber || !college || !semester, !gender, !agree) {
        return res.status(400).json({ message: 'All fields are required.' });
    }
    // Check for duplicate email and phone number in parallel
    const [duplicateEmail, duplicatePhoneNo] = await Promise.all([
        User.findOne({ email }),
        User.findOne({ phoneNumber })
    ]);
    
    if (duplicateEmail && duplicatePhoneNo) {
        console.log('Duplicate email and PhoneNO found:', duplicateEmail);
        return res.status(409).json({ message: 'Email and Phone Number already registered.' });
    }
    if (duplicateEmail) {
        console.log('Duplicate email found:', duplicateEmail);
        return res.status(409).json({ message: 'Email already registered.' });
    }
    
    if (duplicatePhoneNo) {
        console.log('Duplicate phone number found:', duplicatePhoneNo);
        return res.status(409).json({ message: 'Phone number already registered.' });
    }
    
    try {
        // Create a new user
        const newUser = await User.create({ name, email, phoneNumber, college, semester, gender, agree });

        console.log('New user created:', newUser);
        // Send confirmation email
        //await sendConfirmationEmail(name, email);
        return res.status(201).json({
            message: `New user '${newUser.name}' created successfully.`//, user: newUser, // Include the created user details if needed
        });
    } catch (error) {
        console.error('Error handling new registration: \n',error, error.message);
        return res.status(500).json({ message: error.message });
    }
};




export default handleNewRegistration