import nodemailer from 'nodemailer'

const sendConfirmationEmail=async(name, email)=>{
    try{
        const transporter= nodemailer.createTransport({
            // host:"smtp.ethereal.email",
            // port:587,
            // secure:false,
            service:"Gmail",
            auth:{
                user:"open8hub@gmail.com",
                pass:process.env.EMAIL_PASSWORD
            }
        });

        const mailOptions={
            from:'"Hack-This-Spring Team" open8hub@gmail.com',
            to: email,
            subject: 'Registration Confirmation for Hack This Spring',
            text:`Dear ${name},\n\nThank you for registering for HackThisSpring! We are excited to have you onboard for this prestigious hackathon organized by the OpenHub Community.\n\nIn the coming days, we will be hosting a team-building meet where you will have the opportunity to connect with other developers, discuss ideas, and form your teams for the event. We encourage you to participate actively and collaborate with fellow developers.\n\nWe look forward to seeing you at HackThisSpring and wish you the best of luck!\n\nBest regards,\nThe HackThisSpring Team`,
            html:`
                <p>Dear <strong>${name}</strong>,</p>
                <p>Thank you for registering for <strong>HackThisSpring</strong>! We are thrilled to have you onboard for this exciting hackathon, organized by the <strong>OpenHub Community</strong>.</p>
                <p>In the coming days, we will be hosting a <strong>team-building meet</strong> where you will have the opportunity to connect with other developers, exchange ideas, and form your teams for the event. We encourage you to actively participate and collaborate with your fellow developers.</p>
                <p>We are excited about your participation in <strong>HackThisSpring</strong> and wish you the best of luck as you prepare for the hackathon.</p>
                <p>Best regards,</p>
                <p>The HackThisSpring Team</p>
            `
        };

        //Send mail
        await transporter.sendMail(mailOptions);
        console.log(`Confirmation email sent to ${email}`);

    }
    catch (error) {
        console.error('Error sending confirmation email:', error.message);
        throw new Error('Failed to send confirmation email.');
    }
}

export default sendConfirmationEmail;