const users=require("../models/userModel")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.addUserController=async(req,res)=>{
console.log("inside addUserController");
const{username,email,password}=req.body
try{
    const exisistingUser = await users.findOne({email})
    if(exisistingUser){
        res.status(406).json("User Already Exists.. Please Login!!")
    }else{
        const encryptedPassword =await bcrypt.hash(password,10)
        const newUser =  new users({
            username,email,password:encryptedPassword,profilePic:""
        })
        await newUser.save()
        res.status(200).json(newUser)
    } 
     
}catch (error) {
    res.status(401).json(error)
}
}
exports.loginController=async(req,res)=>{
    console.log("inside loginController");
    const{email,password}=req.body
    try{
        const exisistingUser = await users.findOne({email})
        if(exisistingUser){
                let passwordMatch = await bcrypt.compare(password,exisistingUser.password);
                if(passwordMatch || password==exisistingUser.password){
                    const token =jwt.sign({userId:exisistingUser._id},process.env.JWTPASSWORD)
                    res.status(200).json({user:exisistingUser,token})
                }else{
                    res.status(404).json("Invalid Email Or Password")
                }    
        }
        else
        {
            res.status(404).json("User Not Found.. Please Register!!")
        }       
    }catch (error) {
        res.status(401).json(error)
    }
}
exports.updateProfileController =async (req,res) => {
    console.log("Inside editUserController");
    const {profilePic}=req.body
    const userId=req.userId

    try{
        const exisistingUser=await users.findById({_id:userId})
        exisistingUser.profilePic=profilePic
        await exisistingUser.save()
        res.status(200).json(exisistingUser)
    }
    catch (err){
        res.status(401).json(err)
    }
}
exports.getAllUsers =async (req,res) => {
    console.log("inside getAllUsers");
    try {
        const allUser = await users.find({role:"User"})
        res.status(200).json(allUser)
    } catch (error) {
        res.status(401).json(error)
    }
}

   


