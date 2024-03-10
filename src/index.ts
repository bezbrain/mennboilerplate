// // src/index.ts
// import express, { Express, Request, Response } from "express";
// import mongoose from "mongoose";
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";
// import config from "./utils/config";
// require("dotenv").config();

// // dotenv.config()

// const app = express();
// const PORT = process.env.PORT || 3000;

// // Connect to MongoDB

// mongoose
//   .connect(config.mongo.url, { retryWrites: true, w: "majority" })
//   .then(() => {
//     console.log(`Running on ENV = ${process.env.NODE_ENV}`);
//     console.log("Connected to mongoDB.");
//   })
//   .catch((error) => {
//     console.log("Unable to connect.");
//     console.log(error);
//   });

// // Middleware
// app.use(express.json());

// // Start server
// // app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

import express, { Express, Request, Response } from "express";

const port = 8800;

const app = express();

app.get("/", (req, res) => {
  res.send("HELLO FROM EXPRESS AND!!!");
});

app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});
