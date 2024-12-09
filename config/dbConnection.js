const mongoose =require('mongoose')
const connectionString=process.env.CONNECTIONSTRING

mongoose.connect(connectionString).then(res=>{
    console.log("mongodb connection successful");
}).catch(err=>{
    console.log("mongodb connection failed");
    console.log(err);   
})