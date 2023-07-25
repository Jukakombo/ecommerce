import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const port = 5000;
// middlewares

app.use(cors());
app.use(bodyParser.json({ limit: "10mb", extended: true }));

// routes

// default configuration
app.get("/", (req, res) => {
  res.send("Hello welcome to our nodejs backend");
});

// connect to database
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(port, () => {
      console.log("Your application is running on port: " + port);
    });
  })
  .catch((error) => console.log(error));
