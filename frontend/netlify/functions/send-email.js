const sgMail = require("@sendgrid/mail");

exports.handler = async (event) => {
  try {
    const { name,phone, email, message } = JSON.parse(event.body);

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    await sgMail.send({
      to: "vish@nesthomessa.com.au", // tamaro email
      from: "info@nesthomessa.com.au", // SendGrid verified email/domain
      subject: "New Contact Form Submission",
      html: `
        <h2>New Contact Form Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Name:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: "Email sent successfully",
      }),
    };
  } catch (error) {
    console.error(error);

    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        error: error.message,
      }),
    };
  }
};