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
router.get('/saved-recipe',jwtMiddleware,saveRecipeController.getUserSavedRecipeController)
router.delete('/saved-recipe/:id/delete',jwtMiddleware,saveRecipeController.deleteSavedRecipeController)
router.get('/download-recipes',jwtMiddleware,downloadRecipeController.getUserDownloadListController)
router.post('/user-edit',jwtMiddleware,userController.updateProfileController)
router.get('/all-users',jwtMiddleware,userController.getAllUsers)
router.get('/all-downloads',jwtMiddleware,downloadRecipeController.getallDownloadListController)
router.get('/all-testimony',jwtMiddleware,testimonyController.getAllTestimonyController)
router.get('/testimony/:_id/update',jwtMiddleware,testimonyController.updateFeedbackStatusControler)
router.get('/feedbacks',testimonyController.getApprovedFeedbackControler)
router.post('/add-recipe',jwtMiddleware,recipeController.addRecipeController)
router.put('/edit-recipe/:id',jwtMiddleware,recipeController.editRecipeController)
router.delete('/delete-recipe/:id',jwtMiddleware,recipeController.deleteRecipeContoller)

module.exports = router