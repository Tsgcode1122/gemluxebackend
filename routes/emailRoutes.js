const express = require("express");
const router = express.Router();
const emailController = require("../controllers/emailController");
const multer = require("multer");

const upload = multer(); // Initialize multer

// Use the upload middleware to handle file uploads
router.post("/send", upload.single("pdf"), emailController.uploadPdf);
router.post(
  "/emailConsent",
  upload.single("pdf"),
  emailController.uploadEmailConsent,
);
router.post(
  "/revokeConsent",
  upload.single("pdf"),
  emailController.uploadRevokeConsent,
);
router.post(
  "/patientConsent",
  upload.single("pdf"),
  emailController.uploadPatientConsent,
);
router.post(
  "/hippaConsent",
  upload.single("pdf"),
  emailController.uploadHippaConsent,
);
router.post(
  "/questionaire",
  upload.single("pdf"),
  emailController.uploadQuestionaire,
);

module.exports = router;
