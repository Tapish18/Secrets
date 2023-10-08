const User = require("../models/user").User
const md5 =  require("md5");
const encrypt = require("mongoose-encryption")

module.exports.createUser = async function(req,res,err){
    const username = req.body.username

    try {
        const fetchedUser = await User.findOne({email : username});

        if(fetchedUser){
            console.log("User already present!");
            return res.redirect("back")
        }

        const createdUser = await User.create({
            email : req.body.username,
            password : md5(req.body.password)
        })
        // createdUser.save();
        console.log("User created Succesfully :", createdUser);
        return res.render("secrets.ejs")
    } catch (error) {
        console.log("Error occurred : ",error)
    }
    

}


module.exports.login = async function(req,res,err){
    try{
        const fetchedUser = await User.findOne({
            email : req.body.username,
        //     password : req.body.password
        })

        if(fetchedUser){
            
            if(md5(req.body.password) === fetchedUser.password){
                console.log("Successfully logged in : ",req.body.username);
                return res.render("secrets.ejs");
            }
        }

        console.log("Username/Password Incorrect");
        return res.redirect("back")
    }catch(err){
        console.log("Error Occurred : ", err);
        return res.redirect("back");
    }
}