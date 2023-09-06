// const express= require('express')

//rest object
import express from "express";
import dotenv from 'dotenv';
import colors from "colors";
import cors from "cors";
import morgan from "morgan";


import connectDB from "./config/db.js";
import testRoutes from './routes/testRoutes.js' 
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

const PORT=process.env.PORT || 8080;

app.listen(PORT, ()=>{
  console.log(`node server running in ${process.env.DEV_MODE} on port ${PORT}`.bgCyan.green);
});
