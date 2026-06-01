require("dotenv").config();

const express = require("express");
const cors = require("cors");
const sgMail = require("@sendgrid/mail");

const app = express();

app.use(cors());
app.use(express.json());

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.post("/send-enquiry", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    await sgMail.send({
      to: "vish@nesthomessa.com.au",
      from: "info@nesthomessa.com.au", // verified domain email
      replyTo: email,
      subject: "New Website Enquiry",
      html: `
        <h2>New Enquiry Received</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    res.json({
      success: true,
    });
  } catch (error) {
    console.log("===== SENDGRID ERROR =====");
    console.log(JSON.stringify(error.response?.body, null, 2));

    res.status(500).json({
      success: false,
    });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
