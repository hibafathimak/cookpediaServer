const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    recipeId:{
        type:String,required:true
    },
    name:{
        type:String,required:true
    },
    image:{
        type:String,required:true
    },
    userId:{
        type:String,required:true
    },
})

const saveRecipe=mongoose.model("saveRecipe",Schema)
module.exports = saveRecipe