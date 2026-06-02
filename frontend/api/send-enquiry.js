import sgMail from "@sendgrid/mail";

sgMail.setApiKey("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");

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false });
  }

  const { name, email, phone, message } = req.body;

  try {
    await sgMail.send({
      to: "bhimaniharsh402@gmail.com",   //vish@nesthomessa.com.au
      from: "info@nesthomessa.com.au", // SendGrid verified sender
      subject: "New Website Enquiry",
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone}

Message:
${message}
      `,
    });

    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
    });
  }
}