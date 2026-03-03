require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

// Port configuration
const PORT = process.env.PORT || 5009;

// 1. CORS CONFIGURATION (Must be before routes)
const corsOptions = {
  origin: ["https://gemluxeaesthetics.com", "http://localhost:3000"], 
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true, 
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); // Enable pre-flight for all routes

// 2. MIDDLEWARE
app.set("trust proxy", 1);
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 3. ROUTES
const emailRoutes = require("./routes/emailRoutes");
const uploadRoutes = require("./routes/uploadRoutes");

app.get("/", (req, res) => res.send("hello GemLuxe - Server is Running ...."));

app.use("/api/email", emailRoutes);
app.use("/api/signature", uploadRoutes);

// 4. START SERVER
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

// 5. ERROR HANDLING
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Internal Server Error");
});