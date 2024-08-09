const cloudinary = require("cloudinary").v2;
require("dotenv").config();
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Set up Multer storage with Cloudinary
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "uploads", // Folder where images will be stored on Cloudinary
    format: async (req, file) => "png",
    public_id: (req, file) => file.originalname.split(".")[0], // Generate a unique name if needed
  },
});

const upload = multer({ storage: storage });

// Controller function to handle image upload
const uploadImage = (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }
  res.json({ imageUrl: req.file.path });
};

module.exports = {
  upload,
  uploadImage,
};
