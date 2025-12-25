import userServices from "../services/userService.js";
const UserServices=new userServices();

export const checkAuth=async (req,res,next)=>{
    const token=req.cookies?.passtoken;
    if(!token)
     return res.status(401).json({UserNotLogedIn:true})
    const user=await UserServices.VerifyandGetToken(token);
    if(!user)
      return res.status(401).json({UserNotLogedIn:true})
    req.user=user;
    next();
    
}