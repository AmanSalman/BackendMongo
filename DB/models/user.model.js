import mongoose, { Schema, model } from "mongoose";


const userSchema = new Schema({
    name:{
        type:String,
        required :true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        enum:['female','male'],
        default:'female'
    }

}, {
    timestamps:true
});


const userModel = model('user', userSchema);

export default userModel;