import express from "express";

const app = express();


// app.use(÷)
app.use(express.json());

app.use(express.urlencoded({ extended: true }));


// routes

import userRouter from "./src/routes/user.routes.js";

// app.use("/api/v1/user",userRouter)
app.use("/api/v1/user",userRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});




export default app;
