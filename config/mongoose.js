const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1/Secrets")

const db = mongoose.connection

db.on("error",function(err){
    console.error.bind(console,err)
})

db.once("open",function(){
    console.log("Successfully connected to the Database.")
})