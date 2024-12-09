const downloadRecipes=require('../models/downloadRecipe')

exports.addToDownloadRecipeController = async (req,res) => {
  console.log("inside addToDownloadRecipeController");
  const {id} = req.params
  const userId=req.userId
    const {image,name,cuisine} = req.body
    try {
        const existingRecipe = await downloadRecipes.findOne({recipeId:id})
        if(existingRecipe){
            existingRecipe.count+=1
            await existingRecipe.save()
            res.status(200).json(existingRecipe)
        }else{
            const newRecipe =  new downloadRecipes({
                recipeId:id,recipeName:name,recipeImage:image,recipeCuisine:cuisine,count:1,userId})
            await newRecipe.save()
            res.status(200).json(newRecipe)

        }
    } catch (error) {
        res.status(401).json(error)
    }
}