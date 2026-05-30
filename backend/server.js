const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post("/send-enquiry", async (req, res) => {
  try {
    const { name, phone, email, message } = req.body;

    await transporter.sendMail({
      from: "<19dcs013@charusat.edu.in>",
      to: "19dcs013@charusat.edu.in",
      replyTo: {
        address: email,
      },
      subject: "New Enquiry - Nest Homes",
      html: `
    <h2>New Enquiry</h2>
    <p><b>Name:</b> ${name}</p>
    <p><b>Phone:</b> ${phone}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Message:</b> ${message}</p>
  `,
    });

    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
