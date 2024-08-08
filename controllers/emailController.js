require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");
const generatePdf = require("./pdfService");

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

exports.uploadPdf = async (req, res) => {
  try {
    const { htmlContent, patientName } = req.body;

    if (!htmlContent) {
      return res.status(400).send("No HTML content provided");
    }

    // Generate PDF from HTML content
    const pdfBuffer = await generatePdf(htmlContent);

    // Send email with attachment
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "softtoonzz@gmail.com",
      bcc: "falolatosin8@gmail.com",
      subject: `New Patient Consent Form Submission - ${patientName}`,
      text: `TESTING----Please find the attached patient consent form for ${patientName}.`,
      attachments: [
        {
          filename: `${patientName}_Consent_Form.pdf`,
          content: pdfBuffer,
          contentType: "application/pdf",
        },
      ],
      bcc: ["tosignrule22@gmail.com", "softtoonzz@gmail.com"],
    };

    await transporter.sendMail(mailOptions);

    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Error sending email");
  }
};
exports.uploadEmailConsent = async (req, res) => {
  try {
    const { htmlContent, patientName } = req.body;

    if (!htmlContent) {
      return res.status(400).send("No HTML content provided");
    }

    // Generate PDF from HTML content
    const pdfBuffer = await generatePdf(htmlContent);

    // Send email with attachment
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "softtoonzz@gmail.com",
      bcc: "falolatosin8@gmail.com",
      subject: `CONSENT FOR EMAIL/TEXT/TELEPHONE CALL APPOINTMENT 
REMINDERS- ${patientName}`,
      text: `TESTING----Please find the attached Email consent form for ${patientName}.`,
      attachments: [
        {
          filename: `${patientName}_Email_Consent_Form.pdf`,
          content: pdfBuffer,
          contentType: "application/pdf",
        },
      ],
    };

    await transporter.sendMail(mailOptions);

    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Error sending email");
  }
};
exports.uploadRevokeConsent = async (req, res) => {
  try {
    const { htmlContent, patientName } = req.body;

    if (!htmlContent) {
      return res.status(400).send("No HTML content provided");
    }

    // Generate PDF from HTML content
    const pdfBuffer = await generatePdf(htmlContent);

    // Send email with attachment
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "softtoonzz@gmail.com",
      bcc: "falolatosin8@gmail.com",
      subject: `REVOCATION OF CONSENT TO TELEPHONE CALL APPOINTMENT REMINDERS, EMAIL AND/OR TEXT USAGE- ${patientName}`,
      text: ` TESTING----Please find the attached Revoke consent form for ${patientName}.`,
      attachments: [
        {
          filename: `${patientName}_Revoke_Consent_Form.pdf`,
          content: pdfBuffer,
          contentType: "application/pdf",
        },
      ],
    };

    await transporter.sendMail(mailOptions);

    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Error sending email");
  }
};
exports.uploadPatientConsent = async (req, res) => {
  try {
    const { htmlContent, patientName } = req.body;

    if (!htmlContent) {
      return res.status(400).send("No HTML content provided");
    }

    // Generate PDF from HTML content
    const pdfBuffer = await generatePdf(htmlContent);

    // Send email with attachment
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "softtoonzz@gmail.com",
      bcc: "falolatosin8@gmail.com",
      bcc: "falolatosin8@gmail.com",
      subject: `PATIENT CONSENT- ${patientName}`,
      text: ` TESTING----Please find the attached  Patient consent form for ${patientName}.`,
      attachments: [
        {
          filename: `${patientName}_Patient_Consent_Form.pdf`,
          content: pdfBuffer,
          contentType: "application/pdf",
        },
      ],
    };

    await transporter.sendMail(mailOptions);

    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Error sending email");
  }
};
exports.uploadHippaConsent = async (req, res) => {
  try {
    const { htmlContent, patientName } = req.body;

    if (!htmlContent) {
      return res.status(400).send("No HTML content provided");
    }

    // Generate PDF from HTML content
    const pdfBuffer = await generatePdf(htmlContent);

    // Send email with attachment
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "softtoonzz@gmail.com",
      bcc: "falolatosin8@gmail.com",
      subject: `HIPPA  CONSENT- ${patientName}`,
      text: ` TESTING----Please find the attached  HIPPA  consent form for ${patientName}.`,
      attachments: [
        {
          filename: `${patientName}_HIPPA_Consent_Form.pdf`,
          content: pdfBuffer,
          contentType: "application/pdf",
        },
      ],
    };

    await transporter.sendMail(mailOptions);

    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Error sending email");
  }
};
exports.uploadQuestionaire = async (req, res) => {
  try {
    const { htmlContent, patientName } = req.body;

    if (!htmlContent) {
      return res.status(400).send("No HTML content provided");
    }

    // Generate PDF from HTML content
    const pdfBuffer = await generatePdf(htmlContent);

    // Send email with attachment
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "softtoonzz@gmail.com",
      bcc: "falolatosin8@gmail.com",
      subject: `Questionaire- ${patientName}`,
      text: ` TESTING----Please find the attached  Questionaire form for ${patientName}.`,
      attachments: [
        {
          filename: `${patientName}_Questionaire_Form.pdf`,
          content: pdfBuffer,
          contentType: "application/pdf",
        },
      ],
    };

    await transporter.sendMail(mailOptions);

    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Error sending email");
  }
};
