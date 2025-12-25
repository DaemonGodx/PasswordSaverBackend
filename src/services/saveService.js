import saveRepo from "../repository/saveRepository.js";
import CryptoJS from "crypto-js";
import config from "../utils/config.js";
const SaveRepo=new saveRepo();
class saveServices{
    async create(data){ 
        try{
            const secretKey = config.masterKey;
            data.password= CryptoJS.AES.encrypt(data.password ,secretKey).toString();
            data.profilePassword=CryptoJS.AES.encrypt(data.profilePassword, secretKey).toString();
            const save=await SaveRepo.create(data);
            return save;
        }catch(err){
            console.log("ServiceLayerError",err)
            throw err;
        }
    }
    async getDecrypted(id){
        try{
            const save=await SaveRepo.get(id);
            const bytes1 = CryptoJS.AES.decrypt(save.password, config.masterKey);
            const bytes2 = CryptoJS.AES.decrypt(save.profilePassword, config.masterKey); 
            save.password=bytes1.toString(CryptoJS.enc.Utf8);
            save.profilePassword=bytes2.toString(CryptoJS.enc.Utf8);
            return save;
        }catch(err){
        console.log("ServiceLayerError",err)
        throw err;
    }
    }
    async getAll(userId){
        try{
            const saves=await SaveRepo.getAll(userId);
            return saves;
        }
        catch(err){
            console.log("ServiceLayerError",err)
            throw err;
        }
    }
    async update(id, data){
        try{
            const secretKey = config.masterKey;
            data.password= CryptoJS.AES.encrypt(data.password ,secretKey).toString();
            data.profilePassword=CryptoJS.AES.encrypt(data.profilePassword, secretKey).toString();
            const save=await SaveRepo.update(id, data);
            return save;
        }
        catch(err){
            console.log("ServiceLayerError",err)
            throw err;
        }
    }
    async delete(id){
        try{
            const save=await SaveRepo.delete(id);
            return save;
        }
        catch(err){
            console.log("ServiceLayerError",err)
            throw err;
        }
    }
}export default saveServices;


