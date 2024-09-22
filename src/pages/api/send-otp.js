// pages/api/send-otp.js
// import nodemailer from "nodemailer";

import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);


// Temporary store for OTPs (in-memory)
let otps = {};

const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000); // 6-digit OTP
};

// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     const { email } = req.body;

//     if (!email || !email.endsWith("@gmail.com")) {
//       return res
//         .status(400)
//         .json({ message: "Please provide a valid Gmail address." });
//     }

//     // Generate OTP and save it in memory (in production, save in DB or use a caching system)
//     const otp = generateOTP();
//     otps[email] = otp;

//     // Create reusable transporter object using SMTP transport
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.GMAIL_USER, // Your Gmail account
//         pass: process.env.GMAIL_PASS, // Your Gmail account password (consider using an App Password)
//       },
//     });

//     transporter.verify(function (error, success) {
//       if (error) {
//         console.log(error);
//       } else {
//         console.log("Server is ready to take our messages");
//       }
//     });

//     // Send email with OTP
//     const mailOptions = {
//       from: process.env.GMAIL_USER,
//       to: email,
//       subject: "Your OTP Code",
//       text: `Your OTP code is ${otp}`,
//     };

//   //   try {
//   //     await transporter.sendMail(mailOptions);
//   //     res.status(200).json({ message: "OTP sent successfully." });
//   //   } catch (error) {
//   //     console.error("Error sending email:", error);
//   //     res.status(500).json({ message: "Error sending OTP." });
//   //   }
//   // } else {
//   //   res.status(405).json({ message: "Method not allowed" });
//   // }

//   try {
//     await transporter.sendMail(mailOptions);
//     res.status(200).json({ message: 'OTP sent successfully.' });
//   } catch (error) {
//     console.error('Error sending email:', error.message);
//     res.status(500).json({ message: 'Error sending OTP.', error: error.message });
//   }

// }
// }

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;

    if (!email || !email.endsWith('@gmail.com')) {
      return res.status(400).json({ message: 'Please provide a valid Gmail address.' });
    }

    const otp = generateOTP();
    otps[email] = otp;

    const msg = {
      to: email,
      from: 'duary.sumit21@gmail.com', // Use the email address verified by SendGrid
      subject: 'Your OTP Code',
      text: `Your OTP code is ${otp}`,
    };

    try {
      await sendgrid.send(msg);
      res.status(200).json({ message: 'OTP sent successfully.' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending OTP.' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}