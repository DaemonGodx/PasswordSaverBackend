import express from 'express';
const app=express();
import cookieParser from "cookie-parser";
app.use(cookieParser())
import config from "./utils/config.js"
import connect  from './connections/index.js';
import route from './routes/index.js';
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/api",route);
connect(config.url);

app.listen(config.port,()=>console.log("Server is running on port "+config.port))


