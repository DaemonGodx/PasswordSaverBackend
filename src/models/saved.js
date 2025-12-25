import mongoose from "mongoose";
const saveSchema=mongoose.Schema({
    name:{
        type:String,
        required: true 
    },
    url:{
        type:String,
        required: true 
    },
    password:{
        type:String,
        required: true 
    },
    profilePassword:{
        type:String,
        default:null,
    },
    createdBy:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"User"
    
    }

},{timestamps:true})
const Save=mongoose.model("Save",saveSchema)
export default Save;