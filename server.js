// const express= require('express')

//rest object
import express from "express";
import dotenv from 'dotenv';
import colors from "colors";

dotenv.config()
const app= express();

app.get("/",(req,res)=>{
  res.send("<h1> Job protal</h1>");
});

const PORT=process.env.PORT || 8080;

app.listen(PORT, ()=>{
  console.log(`node server running in ${process.env.DEV_MODE} on port ${PORT}`.bgCyan.green);
});
