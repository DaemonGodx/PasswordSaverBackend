import userServices from "../services/userService.js";
const UserServices=new userServices();
export const createUser=async (req,res)=>{
    try{
        
        const user=await UserServices.create(req.body);
        return res.status(201).json({
            data:user,
            error:{},
            success:true,
            message:"User Created Successfully"
        });
    }catch(err){
        return res.status(500).json({
            data:{},
            error:err,
            success:false,
            message:err.message
        });

        
    }
}
export const login=async (req,res)=>{
    try{
        const {user,token}=await UserServices.login(req.body);
        if(!user) {
            return res.status(404).json({
                data:{},
                error:{},
                success:false,
                message:"User Not Found"
            });
        }
           res.status(200).cookie("passtoken",token,{httpOnly: true,   // protects from JS access
          sameSite: "lax",         // prevents some CSRF attacks
          maxAge: 15 * 60 * 1000      // expires in 15 minute
          }).json({token});
           

        }catch(err){
            return res.status(500).json({
            data:{},
            error:err,
            success:false,
            message:err.message
        });


    }

}
export const verifyProfilePassword=async (req,res)=>{
    try{
        console.log(req.body)
        const token=await UserServices.verifyProfilePassword(req.body,req.user);
        res.status(200).cookie("tempToken",token,{httpOnly: true,             // protects from JS access
  sameSite: "lax",         // prevents some CSRF attacks
  maxAge: 1 * 60 * 1000      // expires in 3 minutes
}).json({token});
        
    }catch(err){
            return res.status(500).json({
            data:{},
            error:err,
            success:false,
            message:err.message
        });


    }
}
export const getUser=async (req,res)=>{
    try{
        const user=await UserServices.getUser(req.user.user);
        return res.status(200).json({
            data:user,
            error:{},
            success:true,
            message:"User Fetched Successfully"
        });
    }catch(err){
        return res.status(500).json({
            data:{},
            error:err,
            success:false,
            message:err.message
        });

        
    }
}


