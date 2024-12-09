const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    username:{
        type:String,required:true
    },
    email:{
        type:String,required:true,unique:true
    },
    password:{
        type:String,required:true
    },
    role:{
        type:String,required:true,default:"User"
    }
})

const users = mongoose.model("users",schema)

module.exports=users