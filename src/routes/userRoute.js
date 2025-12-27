import express from "express";
import { createUser, login, verifyProfilePassword, getUser} from "../controllers/userController.js";
import { checkAuth } from "../middleware/auth.js";
const userRoute = express.Router();

userRoute.post("/signup",createUser)
userRoute.post("/login",login)
userRoute.post("/vpp",checkAuth,verifyProfilePassword)
userRoute.get("/me",checkAuth,getUser)
export default userRoute;