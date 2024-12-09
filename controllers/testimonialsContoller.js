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

