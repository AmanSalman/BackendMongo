import mongoose from "mongoose";

export const connectDB = async ()=>{
   return await mongoose.connect(process.env.MONGO_URL).then(()=>{
        console.log("connected");
    }).catch((err)=>{
        console.log(`error detected ${err}`);
    })
};