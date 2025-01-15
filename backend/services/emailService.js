import nodemailer from 'nodemailer'

const sendConfirmationEmail=async( email,mailOptions)=>{
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