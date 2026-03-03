require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5009;

// Middleware
app.set("trust proxy", 1);
app.use(cors()); // Note: Always keep this above your routes
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app use
app.get("/", (req, res) => res.send("hello GemLuxe"));

// routes
const emailRoutes = require("./routes/emailRoutes");
const uploadRoutes = require("./routes/uploadRoutes");

app.use("/api/email", emailRoutes);
app.use("/api/signature", uploadRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Internal Server Error");
});