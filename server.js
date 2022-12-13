require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// routes
const userRoutes = require("./routes/user");
const skillRoutes = require("./routes/skill");

const PORT = process.env.PORT || 5000;

// express app
const app = express();

// middleware
app.use(express.json());

app.use(bodyParser.json());

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

app.use("/api/user", userRoutes);
app.use("/api/skill", skillRoutes);

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
