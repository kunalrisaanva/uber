import dotenv from 'dotenv';;
dotenv.config();
import cors from "cors";
import http from "http";
import app from "./app.js";


const server = http.createServer(app);
const port = process.env.PORT || 3000;

app.use(cors());

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});