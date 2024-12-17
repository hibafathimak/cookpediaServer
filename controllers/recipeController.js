const recipes = require('../models/recipeModel')

exports.getAllRecipesController = async (req, res) => {
    console.log("Inside getAllRecipesController");
    try {
        const allRecipes = await recipes.find()
        res.status(200).json(allRecipes)
    } catch (error) {
        res.status(401).json(error)
    }
}
exports.getSingleRecipeController = async (req, res) => {
    console.log("Inside getASingleRecipeController");
    const { id } = req.params

    try {
        const recipeDetails = await recipes.findById({ _id: id })
        res.status(200).json(recipeDetails)
    }
    catch (err) {
        res.status(401).json(err)
    }
}
exports.getASingleRecipeController = async (req, res) => {
    console.log("Inside getASingleRecipeController");
    const { id } = req.params

    try {
        const recipeDetails = await recipes.findById({ _id: id })
        res.status(200).json(recipeDetails)
    }
    catch (err) {
        res.status(401).json(err)
    }
}

exports.relatedRecipesController = async (req, res) => {
    console.log("Inside relatedRecipesController");
    const cuisine = req.query.cuisine
    try {
        const relatedRecipes = await recipes.find({ cuisine })
        res.status(200).json(relatedRecipes)
    } catch (error) {
        res.status(401).json(err)

    }
}

exports.addRecipeController = async (req, res) => {
    console.log("Inside addRecipeController");
    const { name, ingredients, instructions, prepTimeMinutes, cookTimeMinutes, servings, difficulty, cuisine, caloriesPerServing, image, mealType } = req.body
    try {
        const existingRecipe = await recipes.findOne({ name })
        if (existingRecipe) {
            res.status(406).json("Recipe Already Exist in Collection")
        } else {
            const newRecipe = new recipes({
                name, ingredients, instructions, prepTimeMinutes, cookTimeMinutes, servings, difficulty, cuisine, caloriesPerServing, image, mealType
            })
            await newRecipe.save()
            res.status(200).json(newRecipe)
        }
    } catch (error) {
        res.status(401).json(error)
    }
}

exports.editRecipeController = async (req, res) => {
    console.log("Inside editRecipeController");
    const {id} = req.params
    console.log(id);
    
    const { name, ingredients, instructions, prepTimeMinutes, cookTimeMinutes, servings, difficulty, cuisine, caloriesPerServing, image, mealType } = req.body
    try {

        const updateRecipe = await  recipes.findByIdAndUpdate(
            { _id: id },{name, ingredients, instructions, prepTimeMinutes, cookTimeMinutes, servings, difficulty, cuisine, caloriesPerServing, image, mealType},
            { new: true })
        await updateRecipe.save()
        res.status(200).json("Recipe updated sucessfully")

    } catch (error) {
        res.status(401).json(error)
        console.log(error);
        
    }

}

exports.deleteRecipeContoller = async (req, res) => {
    console.log("Inside deleteRecipeContoller");
    const {id} = req.params
    try {
        const deletedRecipe = await recipes.findByIdAndDelete({ _id: id })
        res.status(200).json("Recipe Deleted Succesfully!!")
    } catch (error) {
        res.status(401).json(error)
    }
}