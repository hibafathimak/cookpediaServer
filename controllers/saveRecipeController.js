const saveRecipe=require('../models/savedRecipeModel')

exports.saveRecipeController=async (req,res) => {
    console.log("inside saveRecipeController");
    const {id}=req.params
    const userId=req.userId
    const {name,image} = req.body
    try {
        const existingRecipe = await saveRecipe.findOne({recipeId:id,userId})
        if(existingRecipe){
            res.status(406).json("Recipe already in Saved Collection")
        }else{
            const newRecipe = new saveRecipe({recipeId:id,name,image,userId})
            await newRecipe.save()
            res.status(200).json(newRecipe)
        }
    } catch (error) {
        res.status(401).json(error)
    }
}

exports.getUserSavedRecipeController = async (req,res) => {
    console.log("Inside getUserSavedRecipeController");
    userId =  req.userId
    try {
        const savedCollection = await saveRecipe.find({userId})
        res.status(200).json(savedCollection)
    } catch (error) {
        res.status(401).json(error)
    }
    
}

exports.deleteSavedRecipeController = async (req,res) => {
    console.log("Inside deleteSavedRecipeController");
    const {id}=req.params
    try {
        await saveRecipe.findByIdAndDelete({_id:id})
        res.status(200).json("Recipe Removed From the Saved Recipe Collection")

    } catch (error) {
        res.status(401).json(error)
    }  
}