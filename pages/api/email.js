import { mailOptions, transporter } from "../../app/config/nodemailer";

// Update the mapping to match the TransformationForm fields
const CONTACT_MESSAGE_FIELDS = {
  title: "Title",
  eyes: "Eyes Color",
  skin: "Skin Color",
  hair: "Hair Color",
  bust: "Bust Size",
  body: "Body Type",
  height: "Height",
  age: "Age",
  // Add any additional fields from the form here
};

const generateEmailContent = (data) => {
  // Generate the email content based on the new data structure
  const stringData = Object.entries(data).reduce((str, [key, val]) => {
    const label = CONTACT_MESSAGE_FIELDS[key] || key;
    return (str += `${label}: ${val}\n\n`);
  }, "");

  const htmlData = Object.entries(data).reduce((str, [key, val]) => {
    const label = CONTACT_MESSAGE_FIELDS[key] || key;
    return (str += `<p><strong>${label}:</strong> ${val}</p>`);
  }, "");

  return {
    text: stringData,
    html: `<html><body>${htmlData}</body></html>`,
  };
};

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    // Assume validation of required fields is handled on the client side
    try {
      await transporter.sendMail({
        ...mailOptions,
        ...generateEmailContent(data),
        subject: "New AI Influencer Creation Request",
      });

      return res
        .status(200)
        .json({ success: true, message: "Form submitted successfully." });
    } catch (err) {
      console.error(err);
      return res
        .status(500)
        .json({ success: false, message: "Failed to send email." });
    }
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
};

export default handler;
