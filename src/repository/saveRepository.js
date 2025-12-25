import Save from "../models/saved.js"
class saveRepo{
    async create(data){
        try{
            const save=await Save.create({
                name:data.name,
                url:data.url,
                password:data.password,
                profilePassword:data.profilePassword,
                createdBy:data.createdBy
            })
            return save;
        }catch(err){
            console.log("RepositoryLayerError",err)
            throw err;
        }
    }

    async get(id){
        try{
            const save=await Save.findById(id);
            return save;
        }catch(err){
            console.log("RepositoryLayerError",err)
            throw err;
        }
    }

    async getAll(userId){
        try{
            const saves=await Save.find({createdBy: userId});
            return saves;
        }catch(err){
            console.log("RepositoryLayerError",err)
            throw err;
        }
    }

    async update(id, data){
        try{
            const save=await Save.findByIdAndUpdate(id, data, {new: true});
            return save;
        }catch(err){
            console.log("RepositoryLayerError",err)
            throw err;
        }
    }

    async delete(id){
        try{
            const save=await Save.findByIdAndDelete(id);
            return save;
        }catch(err){
            console.log("RepositoryLayerError",err)
            throw err;
        }
    }

}
export default saveRepo;