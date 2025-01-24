import Subscribers from "../models/Subscriber.js";
import sendConfirmationEmail from "../services/emailService.js";
import allowedDomains from "../config/allowedDomains.js";
const handleNewSubscriber = async (req, res) => {
    const { email } = req.body;
    if (!email) {
        return res.status(400).json({ message: 'Enter email to subscribe to the newsletter' });
    }
      // Check if the email domain is allowed
      const emailDomain = email.split('@')[1];
      if (!allowedDomains.includes(emailDomain)) {
          return res.status(400).json({ message: 'Email domain not allowed.' });
      }
    const duplicateEmail = await Subscribers.findOne({ email }); 
    if (duplicateEmail) {
        return res.status(409).json({ message: 'Email already registered.' });
    } 
      
    // Create a new subscriber
    try {
        const newSubscriber = await Subscribers.create({ email });
        // Send confirmation email
        const mailOptions = {
            from: '"Open Hub Community" <open8hub@gmail.com>',
            to: email,
            subject: 'Welcome to Open Hub Community Newsletter! 🎉',
            text: `Hi there! \n\nThank you for subscribing to the Open Hub Community newsletter! 🎉 We're excited to have you onboard and look forward to bringing you the latest updates on open-source projects, tech trends, and collaboration opportunities. 💻✨\n\nAs a subscriber, you'll be the first to know about new initiatives, tutorials, and news from our community. Stay tuned for upcoming newsletters packed with valuable insights and opportunities to engage with like-minded tech enthusiasts! 🚀\n\nFeel free to reach out to us if you have any questions or suggestions. We’d love to hear from you! 💬\n\nIf you’re interested in joining our community and collaborating with us directly, click here to join: https://github.com/Open-Hub-Community/Support/issues/new?assignees=&labels=invite+me+to+the+community&projects=&template=invitation.yml&title=Please+invite+me+to+the+Open+Hub+Community+Organization 🔗\n\nBest regards,\nNaik Mubashir\nFounder, Open Hub Community\n\nFollow us on:\nLinkedIn: https://www.linkedin.com/company/open8hub\nGitHub: https://www.github.com/Open-Hub-Community\nTwitter: https://www.x.com/open8hub\n\n🚀 Let's build something amazing together!`,
            html: `
                <p>Hi there!</p>
                <p>Thank you for subscribing to the <strong>Open Hub Community</strong> newsletter! 🎉 We are thrilled to have you as part of our growing community and are excited to bring you the latest updates on open-source projects, tech trends, and collaboration opportunities. 💻✨</p>
                <p>As a subscriber, you'll be the first to know about:</p>
                <ul>
                    <li><strong>Exclusive open-source projects</strong> and collaboration opportunities. 🔧</li>
                    <li><strong>Helpful resources</strong> and tutorials to enhance your skills. 📚</li>
                    <li><strong>Latest news and trends</strong> in the world of tech and innovation. 🌐</li>
                </ul>
                <p>We encourage you to stay engaged and participate in upcoming events. If you ever have any questions, feedback, or suggestions, don’t hesitate to reach out. We’re always happy to hear from you! 💬</p>
                <p>If you’re interested in joining our community and collaborating with us directly, <a href="https://github.com/Open-Hub-Community/Support/issues/new?assignees=&labels=invite+me+to+the+community&projects=&template=invitation.yml&title=Please+invite+me+to+the+Open+Hub+Community+Organization">click here to join the Open Hub Community</a> 🔗.</p>
                <p>Best regards,</p>
                <p><strong>Naik Mubashir</strong><br>Founder, Open Hub Community</p>
                <p>Follow us on:</p>
                <p>
                    <a href="https://www.linkedin.com/company/open8hub">LinkedIn</a> | 
                    <a href="https://www.github.com/Open-Hub-Community">GitHub</a> | 
                    <a href="https://www.x.com/open8hub">Twitter</a>
                </p>
                <p>🚀 Let's build something amazing together!</p>
            `
        };
        
         sendConfirmationEmail(email,mailOptions);
        return res.status(201).json({
            message: `New subscriber '${newSubscriber.email}' added successfully.`
        });
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error while handling new subscription' });
    }
};

export default handleNewSubscriber;
