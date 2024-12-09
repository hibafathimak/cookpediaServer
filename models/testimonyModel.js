const mongoose = require('mongoose')

const schema= new mongoose.Schema({
    name:{
        type:String,required:true
    },
    email:{
        type:String,required:true
    },
    message:{
        type:String,required:true
    },
    status:{
        type:String,required:true,default:"Pending"
    }
})

const testimonials = mongoose.model("testimonials",schema)

module.exports=testimonials