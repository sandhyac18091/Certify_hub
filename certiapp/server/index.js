import express from "express";
import {json} from 'express';
import dotenv from 'dotenv';
import Adminroute from './Routes/Adminroute.js'
import mongoose from "mongoose";
import cors from 'cors'

dotenv.config()
const app=express()
app.use(cors({
    origin:'http://localhost:7000',
    credentials:true
}));
app.use(json());
app.use('/',Adminroute)

const Port=process.env.port

app.listen(Port,function(){
    console.log(`Server listening port ${Port}`);
    
});
mongoose.connect('mongodb://mongodb:27017/Certiapp')
  .then(() => {
    console.log('MongoDB Connected Successfully to Certiapp');
  })
  .catch((error) => {
    console.error('MongoDB connection failed:', error);
  });