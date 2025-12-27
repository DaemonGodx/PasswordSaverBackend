import userRoute from "./userRoute.js";
import saveRoute from "./saveRoute.js";
import express from "express";
const route = express.Router();
route.use("/user",userRoute);
route.use("/save",saveRoute);
export default route;
