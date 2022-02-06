import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();
const { EMAIL_USER, EMAIL_PASS } = process.env;

const sendEmail = (to, message, subject) => {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.google.com",
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: EMAIL_USER,
    to: to,
    subject: subject,
    text: message,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log(`Email enviado ${info.response}`);
    }
  });
};

export default sendEmail;
