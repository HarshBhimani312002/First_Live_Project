import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
console.log("API KEY EXISTS:", !!process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    });
  }

  try {
    const { name, email, phone, message } = req.body;

    await sgMail.send({
      to: "vish@nesthomessa.com.au",
      from: "info@nesthomessa.com.au",
      replyTo: email,
      subject: "New Website Enquiry",
      html: `
        <h2>New Enquiry Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    console.error("===== SENDGRID ERROR =====");
    console.error(error);

    if (error.response) {
      console.error(JSON.stringify(error.response.body, null, 2));
    }

    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
}