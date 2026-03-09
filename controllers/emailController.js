const { Resend } = require("resend");
const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const generatePdf = require("./pdfService");

const resend = new Resend(process.env.RESEND_API_KEY);

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const FROM_EMAIL = "Gem Luxe Aesthetics <noreply@noreply.com.ng>";
const TO_EMAIL = ["gemluxemedspa@gmail.com"];

const sendPdfEmail = async ({
  htmlContent,
  patientName,
  subject,
  text,
  html,
  fileName,
  tempFileName,
}) => {
  if (!htmlContent) {
    throw new Error("No HTML content provided");
  }

  const pdfBuffer = await generatePdf(htmlContent);
  console.log("PDF buffer size:", pdfBuffer.length);

  const filePath = path.join(__dirname, tempFileName);
  fs.writeFileSync(filePath, pdfBuffer);
  console.log("PDF saved to file");

  const pdfBase64 = fs.readFileSync(filePath).toString("base64");

  const mailOptions = {
    from: FROM_EMAIL,
    to: TO_EMAIL,
    subject,
    text,
    html,
    attachments: [
      {
        filename: fileName,
        content: pdfBase64,
        contentType: "application/pdf",
      },
    ],
  };

  await resend.emails.send(mailOptions);
};

exports.uploadPdf = async (req, res) => {
  try {
    const { htmlContent, patientName } = req.body;

    await sendPdfEmail({
      htmlContent,
      patientName,
      subject: `New Patient Consent Form Submission - ${patientName}`,
      text: `Please find the attached patient consent form for ${patientName}.`,
      html: `<p>Please find the attached patient consent form for <strong>${patientName}</strong>.</p>`,
      fileName: `${patientName}_Consent_Form.pdf`,
      tempFileName: "test.pdf",
    });

    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(
      error.message === "No HTML content provided" ? 400 : 500
    ).send(error.message === "No HTML content provided" ? error.message : "Error sending email");
  }
};

exports.uploadEmailConsent = async (req, res) => {
  try {
    const { htmlContent, patientName } = req.body;

    await sendPdfEmail({
      htmlContent,
      patientName,
      subject: `CONSENT FOR EMAIL/TEXT/TELEPHONE CALL APPOINTMENT REMINDERS - ${patientName}`,
      text: `Please find the attached Email consent form for ${patientName}.`,
      html: `<p>Please find the attached Email consent form for <strong>${patientName}</strong>.</p>`,
      fileName: `${patientName}_Email_Consent_Form.pdf`,
      tempFileName: "email-consent.pdf",
    });

    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(
      error.message === "No HTML content provided" ? 400 : 500
    ).send(error.message === "No HTML content provided" ? error.message : "Error sending email");
  }
};

exports.uploadRevokeConsent = async (req, res) => {
  try {
    const { htmlContent, patientName } = req.body;

    await sendPdfEmail({
      htmlContent,
      patientName,
      subject: `REVOCATION OF CONSENT TO TELEPHONE CALL APPOINTMENT REMINDERS, EMAIL AND/OR TEXT USAGE - ${patientName}`,
      text: `Please find the attached Revoke consent form for ${patientName}.`,
      html: `<p>Please find the attached Revoke consent form for <strong>${patientName}</strong>.</p>`,
      fileName: `${patientName}_Revoke_Consent_Form.pdf`,
      tempFileName: "revoke-consent.pdf",
    });

    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(
      error.message === "No HTML content provided" ? 400 : 500
    ).send(error.message === "No HTML content provided" ? error.message : "Error sending email");
  }
};

exports.uploadPatientConsent = async (req, res) => {
  try {
    const { htmlContent, patientName } = req.body;

    await sendPdfEmail({
      htmlContent,
      patientName,
      subject: `PATIENT CONSENT - ${patientName}`,
      text: `Please find the attached Patient consent form for ${patientName}.`,
      html: `<p>Please find the attached Patient consent form for <strong>${patientName}</strong>.</p>`,
      fileName: `${patientName}_Patient_Consent_Form.pdf`,
      tempFileName: "patient-consent.pdf",
    });

    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(
      error.message === "No HTML content provided" ? 400 : 500
    ).send(error.message === "No HTML content provided" ? error.message : "Error sending email");
  }
};

exports.uploadHippaConsent = async (req, res) => {
  try {
    const { htmlContent, patientName } = req.body;

    await sendPdfEmail({
      htmlContent,
      patientName,
      subject: `HIPPA CONSENT - ${patientName}`,
      text: `Please find the attached HIPPA consent form for ${patientName}.`,
      html: `<p>Please find the attached HIPPA consent form for <strong>${patientName}</strong>.</p>`,
      fileName: `${patientName}_HIPPA_Consent_Form.pdf`,
      tempFileName: "hippa-consent.pdf",
    });

    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(
      error.message === "No HTML content provided" ? 400 : 500
    ).send(error.message === "No HTML content provided" ? error.message : "Error sending email");
  }
};

exports.uploadQuestionaire = async (req, res) => {
  try {
    const { htmlContent, patientName } = req.body;

    await sendPdfEmail({
      htmlContent,
      patientName,
      subject: `Questionaire - ${patientName}`,
      text: `Please find the attached Questionaire form for ${patientName}.`,
      html: `<p>Please find the attached Questionaire form for <strong>${patientName}</strong>.</p>`,
      fileName: `${patientName}_Questionaire_Form.pdf`,
      tempFileName: "questionaire.pdf",
    });

    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(
      error.message === "No HTML content provided" ? 400 : 500
    ).send(error.message === "No HTML content provided" ? error.message : "Error sending email");
  }
};