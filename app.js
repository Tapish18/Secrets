const express = require("express")
const path = require("path")
const port = 8000
const ejs = require("ejs")
const body_parser = require("body-parser")
const mongoose = require("./config/mongoose");


const app = express()
const Router = require("./routes/index")

app.use(express.static("public"));

app.use(body_parser.urlencoded({
    extended : true
}))

app.set("views", path.join(__dirname,"views"));
app.set("view engine", "ejs");

app.use("/",Router);


app.listen(port,function(error){
    if(error){
        console.log(`Error Occured : ${error}`);
    }else{
        console.log(`Server Started Successfully at port ${port}`);
        // console.log(app);
    }
})
