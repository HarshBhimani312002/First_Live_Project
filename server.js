require("dotenv").config();

const express = require("express");
const cors = require("cors");
const sgMail = require("@sendgrid/mail");

const app = express();

app.use(cors());
app.use(express.json());

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.post("/api/send-enquiry", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    await sgMail.send({
      to: "bhimaniharsh402@gmail.com",
      from: "info@nesthomessa.com.au",
      subject: "New Website Enquiry",
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Message: ${message}
      `,
    });

    res.json({ success: true });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});