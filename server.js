import { config } from "dotenv";
import express from "express";
import mongoose from "mongoose";

config();

const PORT = process.env.PORT || 5000;

const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,PUT,POST,DELETE,PATCH,OPTIONS"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type, Authorization"
  );
  next();
});

mongoose.set("strictQuery", true);

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(PORT, () => {
      console.log("connect to db && listening on port", PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
