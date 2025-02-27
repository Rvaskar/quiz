require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
console.log('object')
const quizRoutes = require("./routes/quizRoutes");
const scoreRoutes = require("./routes/scoreRoutes");

const app = express();
connectDB();
app.use(cors());
app.use(express.json());

app.use("/api/quiz", quizRoutes);
app.use("/api/score", scoreRoutes);

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
