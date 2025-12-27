import userRepo from "../repository/userRepo.js"
import bcrypt from "bcrypt";
import config from "../utils/config.js";
import jwt from "jsonwebtoken";
const UserRepo=new userRepo();
class userServices
{
    async create(data){
        try{
            data.password=await bcrypt.hash(data.password,10);
            data.profilePassword=await bcrypt.hash(data.profilePassword,10);
            const user=await UserRepo.create(data);
            return user;
        }catch(err)
        {
            console.log("ServiceLayerError",err)
            throw err;
        }

}
async login(data){
    try{
        const user=await UserRepo.getuser(data);
        if(!user) {
            throw new Error("User Not Found");
        
        }
        const isMatch=await this.passwordMatch(data.password,user.password);
        if(!isMatch){
            throw new Error("Invalid Password");
        }
        const token=this.createToken(user);
        return {user,token};


        
    }catch(err){
        console.log("ServiceLayerError",err)
        throw err;
    }

}
async getUser(data){
    try{
        const user=await UserRepo.getuser(data);
        return user;
    }
    catch(err){
        console.log("ServiceLayerError",err)
        throw err;
    }
}
async verifyProfilePassword(data,user){
    try{
        const userr=await UserRepo.getuser(user.user);
        if(!user) {
            throw new Error("User Not Found");
        
        }
        const isMatch=await this.passwordMatch(data.profilePassword,userr.profilePassword);
        console.log(isMatch)
        if(!isMatch){
            throw new Error("Invalid Password");
        }
        const token=this.createTokenTemp(userr.profilePassword);
        return token;
    }catch(err){
        console.log("ServiceLayerError",err)
        throw err;
    }
}
passwordMatch(PlainPassword,EncriptedPassword){
    return bcrypt.compare(PlainPassword,EncriptedPassword);
}

createToken(user){
    return jwt.sign({user:user},config.secret, { expiresIn: "15m" })
}
createTokenTemp(user){
    return jwt.sign({user:user},config.secret, { expiresIn: "1m" })
}

VerifyandGetToken(token){
   if(!token) return null;
        try {
            return jwt.verify(token,config.secret);
        } catch (error) {
             console.log(error);
        }
}
}

export default userServices;
