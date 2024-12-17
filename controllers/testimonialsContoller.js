const testimonials = require('../models/testimonyModel')

exports.addTestimonyController =async (req,res) => {
    console.log("Inside addTestimonyController");
    const {name,email,message}=req.body
    try {
        const testimony = new testimonials({name,email,message})
        await testimony.save()
        res.status(200).json(testimony)
    } catch (error) {
        res.status(401).json(error)
    }  
}
exports.getAllTestimonyController =async (req,res) => {
    console.log("Inside getAllTestimonyController");
    try {
        const testimonyList = await testimonials.find()
        res.status(200).json(testimonyList)
    } catch (error) {
        res.status(401).json(error)
    }  
}

exports.updateFeedbackStatusControler =async (req,res) => {
    console.log("Inside updateFeedbackStatusControler");
    const {_id} = req.params
    const status =req.query.status
    try {
        const existingTestimony = await testimonials.findById({_id})
        existingTestimony.status = status
        await existingTestimony.save()
        res.status(200).json(existingTestimony)
    } catch (error) {
        res.status(401).json(error)
    }
}

exports.getApprovedFeedbackControler =async (req,res) => {
    console.log("Inside getApprovedFeedbackControler");

    try {
        const approvedFeedbacks = await testimonials.find({status:"Approved"})
        res.status(200).json(approvedFeedbacks)
    } catch (error) {
        res.status(401).json(error)
    }
}

