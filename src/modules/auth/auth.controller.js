import bcrypt from 'bcryptjs';
import userModel from '../../../DB/models/user.model.js';
import { registerSchema } from './user.validation.js';
import  jwt  from 'jsonwebtoken';
  
  
  
  export const auth = async (req,res)=>{
    return res.json ({message:"auth"});
  }

  export const register = async (req,res)=>{
    try {
        const {name,email,password} = req.body;
        const validate = registerSchema.validate({name,email,password}, {abortEarly:false});
        if(!validate.error){
            const hashedPassword = await bcrypt.hash(password, parseInt(process.env.SALT));
            const user = await new userModel ({
                name,email,password:hashedPassword
            });
            user.save();
            return res.json({message:"success", user:{
                name,email
            }});
        }
        const errorMessage = validate.error.details.map(detail => detail.message).join(', ');
        return res.json({ errorMessage});

    } catch (error) {
        return res.json({message:'error', error});
    }
  }

  export const login = async (req,res)=>{
    try {
        const {email,password} = req.body;
        const user = await userModel.findOne({email});
        if(!user){
            return res.json({message:"invaild data"});
        }
        //check password
        const checkPass = await bcrypt.compare(password,user.password);
        if(!checkPass){
            return res.json({message:"invaild data"})
        }
        const token = jwt.sign({ id:user._id, role:user.role}, process.env.LOGINSIG , {expiresIn:'1h'});
        return res.json({message:"success", token});
    } catch (error) {
        return res.json({message:'error', error});
    }
  }