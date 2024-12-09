require('dotenv').config()
const express = require('express')
const cors = require('cors')
require('./config/dbConnection')
const router = require('./routes/routes')

const serverApp = express()

serverApp.use(cors())
serverApp.use(express.json())
serverApp.use(router)

const PORT = 3000 || process.env.PORT

serverApp.listen(PORT,()=>{
    console.log("Server started Running");
})

serverApp.get('/',(req,res)=>{
    res.status(200).send("<h1>Server Started Running Waiting for Client Request</h1>")
})