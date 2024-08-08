require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./db");
const session = require("express-session");
const app = express();
const PORT = process.env.PORT || 5009;
const { sessionStore } = require("./db");
app.set("trust proxy", 1);
app.use(cors());
app.use(express.json());

// app use
app.get("/", (req, res) => res.send("hello GemLuxe"));

// routes
const emailRoutes = require("./routes/emailRoutes");

app.use("/api/email", emailRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Internal Server Error");
});
