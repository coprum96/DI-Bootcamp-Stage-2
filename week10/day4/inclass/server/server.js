import express from "express";
import cookieParser from "cookie-parser";
import cors from 'cors';
import dotenv from 'dotenv';
import db from "./config/db.js";
import user_router from "./routes/Users.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(cookieParser());

app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.use(user_router)

const PORT = process.env.PORT || 8080;
app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
});

(async () => {
  try {
    await db.authenticate();
    console.log("Database connected")
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();
