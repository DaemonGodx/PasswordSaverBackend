import User from "../models/user.js"
class userRepo{
    async create(data){
        try{
            const user=await User.create({
                name:data.name,
                email:data.email,
                password:data.password,
                profilePassword:data.profilePassword,
            })
            return user;
        }catch(err){
            console.log("RepositoryLayerError",err)
            throw err;
        }

        }
        
        async getuser(data){
            try{
                const user=await User.findOne({email:data.email});
                return user;

    }catch(err)
    {
        console.log("RepositoryLayerError",err)
        throw err;
    }
}
}
    export default userRepo;

