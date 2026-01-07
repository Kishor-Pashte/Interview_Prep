require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/auth.routes");
const notesRoutes = require("./routes/note.routes");

const app = express();
connectDB();

app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/notes", notesRoutes);

app.listen(5000, () => {
  console.log("Server running on 5000");
});
