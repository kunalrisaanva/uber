import express from "express";
import cookieParser from "cookie-parser";

import cors from "cors";

const app = express();

// app.use(÷)
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(cookieParser());

// routes

import userRouter from "./src/routes/user.routes.js";

// app.use("/api/v1/user",userRouter)
app.use("/api/v1/user", userRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

export default app;
