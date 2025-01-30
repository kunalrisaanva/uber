import dotenv from 'dotenv';;
dotenv.config();
import cors from "cors";
import http from "http";
import app from "./app.js";
import { connect } from './src/db/db.js';

const server = http.createServer(app);
const port = process.env.PORT || 3000;

connect().then(() => {
  server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}).catch((error) => {
  console.error("Error connecting to MongoDB: ", error.message);
});
