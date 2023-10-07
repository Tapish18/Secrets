const express = require("express")
const port = 8000
const ejs = require("ejs")
const body_parser = require("body-parser")

const app = express()



app.listen(port,function(error){
    if(error){
        console.log(`Error Occured : ${error}`);
    }else{
        console.log(`Server Started Successfully at port ${port}`);
    }
})
