const express = require ('express')
const recipeController = require('../controllers/recipeController')
const testimonyController = require('../controllers/testimonialsContoller')
const userController = require("../controllers/userController")
const downloadRecipeController = require("../controllers/downloadRecipeController")
const saveRecipeController = require("../controllers/saveRecipeController")
const jwtMiddleware = require('../middlewares/jwtMiddleware')



const router=new express.Router()

router.get('/all-recipies',recipeController.getAllRecipesController)
router.post('/add-testimony',testimonyController.addTestimonyController)
router.post('/register',userController.addUserController)
router.post('/login',userController.loginController)
router.get('/recipie/:id/view',jwtMiddleware,recipeController.getSingleRecipeController)
router.get('/related-recipes',jwtMiddleware,recipeController.relatedRecipesController)
router.post('/recipe/:id/download',jwtMiddleware,downloadRecipeController.addToDownloadRecipeController)
router.post('/recipe/:id/save',jwtMiddleware,saveRecipeController.saveRecipeController)


module.exports = router