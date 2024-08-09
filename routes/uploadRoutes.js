const express = require("express");
const { upload, uploadImage } = require("../controllers/uploadController");

const router = express.Router();

router.post("/send", upload.single("image"), uploadImage);

module.exports = router;
