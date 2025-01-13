import User from "../models/User.js";

const handleNewRegistration = async (req, res) => {
    try {
        const { name, email, phoneNumber, college } = req.body;

        // Validate required fields
        if (!name || !email || !phoneNumber || !college) {
            return res.status(400).json({ message: 'All fields are required.' });
        }

        // Check for duplicate email and phone number in parallel
        const [duplicateEmail, duplicatePhoneNo] = await Promise.all([
            User.findOne({ email }),
            User.findOne({ phoneNumber })
        ]);

        if (duplicateEmail) {
            console.log('Duplicate email found:', duplicateEmail);
            return res.status(409).json({ message: 'Email already registered.' });
        }

        if (duplicatePhoneNo) {
            console.log('Duplicate phone number found:', duplicatePhoneNo);
            return res.status(409).json({ message: 'Phone number already registered.' });
        }

        // Create a new user
        const newUser = await User.create({ name, email, phoneNumber, college });

        console.log('New user created:', newUser);
        return res.status(201).json({
            message: `New user '${newUser.name}' created successfully.`,
            user: newUser, // Include the created user details if needed
        });
    } catch (error) {
        console.error('Error handling new registration:', error.message);
        return res.status(500).json({ message: 'Internal server error.' });
    }
};


export default handleNewRegistration