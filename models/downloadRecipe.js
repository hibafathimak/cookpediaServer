const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    recipeId:{
        type:String,
        required:true
    },
    recipeName:{
        type:String,
        required:true
    },recipeImage:{
        type:String,
        required:true
    },recipeCuisine:{
        type:String,
        required:true
    },count:{
        type:Number,
        required:true
    },userId:{
        type:String,
        required:true
    }
})

const downloadRecipes = mongoose.model("downloadRecipes",schema)
module.exports = downloadRecipes