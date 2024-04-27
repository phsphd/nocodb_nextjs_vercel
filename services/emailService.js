const nodemailer = require("nodemailer");

// Configure the email transport using the SMTP protocol
const transporter = nodemailer.createTransport({
  host: "smtp.example.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "example@example.com",
    pass: "password"
  }
});

// Function to send email
const sendEmail = async (emailOptions) => {
  try {
    let info = await transporter.sendMail(emailOptions);
    console.log("Message sent: %s", info.messageId);
    return info;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};

module.exports = { sendEmail };
