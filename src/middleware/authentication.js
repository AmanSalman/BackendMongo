export const auth = async (req,res)=>{
    try {
        const {token} = req.headers;
        if(!token){
            return res.json({message:"Token is reqirued"});
        }
        const decoded = jwt.verify(token, process.env.LOGINSIG);
        req.userId = decoded._id;
    } catch (error) {
        return res.json({message:"error", error})
    }
}