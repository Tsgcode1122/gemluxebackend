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
const corsOptions = {
  origin: ["https://gemluxeaesthetics.com", "http://localhost:3000"], 
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true, 
};
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
app.use(cors(corsOptions));

app.options('*', cors(corsOptions));