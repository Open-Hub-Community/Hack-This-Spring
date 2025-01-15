import Subscribers from "../models/Subscriber.js";
import sendConfirmationEmail from "../services/emailService.js";

const handleNewSubscriber = async (req, res) => {
    const { email } = req.body;
    if (!email) {
        return res.status(400).json({ message: 'Enter email to subscribe to the newsletter' });
    }
    const duplicateEmail = await Subscribers.findOne({ email });
    
    if (duplicateEmail) {
        console.log('Duplicate email found:', duplicateEmail);
        return res.status(409).json({ message: 'Email already registered.' });
    }
    
    try {
    // Create a new subscriber
        const newSubscriber = await Subscribers.create({ email });

        console.log('New subscriber created:', newSubscriber);

        // Send confirmation email
        //await sendConfirmationEmail(email);

        return res.status(201).json({
            message: `New subscriber '${newSubscriber.email}' added successfully.`
        });
    } catch (error) {
        console.error('Error handling new subscription:', error);
        return res.status(500).json({ message: 'Internal server error while handling new subscription' });
    }
};

export default handleNewSubscriber;
