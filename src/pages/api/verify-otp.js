// pages/api/verify-otp.js
export default function handler(req, res) {
    if (req.method === 'POST') {
      const { email, otp } = req.body;
  
      if (!otps[email]) {
        return res.status(400).json({ message: 'OTP expired or email not found.' });
      }
  
      if (parseInt(otp) === otps[email]) {
        // OTP matched
        delete otps[email]; // Remove OTP after successful verification
        res.status(200).json({ message: 'OTP matched.' });
      } else {
        // OTP did not match
        res.status(400).json({ message: 'OTP did not match. Please try again.' });
      }
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  }
  