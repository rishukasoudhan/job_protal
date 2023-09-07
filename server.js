// const express= require('express')

//rest object
import express from "express";
import "express-async-errors";
import dotenv from 'dotenv';
import colors from "colors";
import cors from "cors";
import morgan from "morgan";

//file import
import connectDB from "./config/db.js";

// routes import 
import authRoutes from "./routes/authRoutes.js"
import testRoutes from './routes/testRoutes.js' 
import errorMiddelware from "./middlewares/errorMiddleware.js";
dotenv.config()

// db connection
connectDB();

//rest object
const app = express();


//middelwares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));


//routes
app.use("/api/v1/test", testRoutes);
app.use("/api/v1/auth", authRoutes);

//validation middelware
app.use(errorMiddelware);

const PORT=process.env.PORT || 8080;

app.listen(PORT, ()=>{
  console.log(`node server running in ${process.env.DEV_MODE} on port ${PORT}`.bgCyan.green);
});
