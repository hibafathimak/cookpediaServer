const recipes=require('../models/recipeModel')

exports.getAllRecipesController = async(req,res)=>{
    console.log("Inside getAllRecipesController");
    try {
        const allRecipes = await recipes.find() 
        res.status(200).json(allRecipes)
    } catch (error) {
        res.status(401).json(error)
    }
}



exports.getSingleRecipeController =async (req,res) => {
     console.log("Inside getASingleRecipeController");
    const {id}=req.params
    
    try{
        const recipeDetails=await recipes.findById({_id:id})
        res.status(200).json(recipeDetails)
    }
    catch (err){
        res.status(401).json(err)
    }
}
exports.getASingleRecipeController=async(req,res)=>{
    console.log("Inside getASingleRecipeController");
    const {id}=req.params
    
    try{
        const recipeDetails=await recipes.findById({_id:id})
        res.status(200).json(recipeDetails)
    }
    catch (err){
        res.status(401).json(err)
    }
}

exports.relatedRecipesController=async (req,res) => {
    console.log("Inside relatedRecipesController");
    const cuisine= req.query.cuisine
    try {
        const relatedRecipes =await recipes.find({cuisine})
        res.status(200).json(relatedRecipes)
    } catch (error) {
        res.status(401).json(err)

    }
}