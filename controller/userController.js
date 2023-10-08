const User = require("../models/user").User
// const md5 =  require("md5");
const bcrypt = require("bcrypt");
const saltRounds = 8;
const encrypt = require("mongoose-encryption")

module.exports.createUser = async function(req,res,err){
    const username = req.body.username

    try {
        const fetchedUser = await User.findOne({email : username});

        if(fetchedUser){
            console.log("User already present!");
            return res.redirect("back")
        }

        const hash = await bcrypt.hash(req.body.password,saltRounds)
        const createdUser = await User.create({
            email : req.body.username,
            password : hash
        })

        console.log("User created Succesfully :", createdUser);
        return res.render("secrets.ejs")

        // bcrypt.hash(req.body.password,saltRounds,function(err,hash){

        //     const createdUser = User.create({
        //         email : req.body.username,
        //         password : hash
        //     })
        //     // createdUser.save();
        //     console.log("User created Succesfully :", createdUser);
        //     return res.render("secrets.ejs")
        // })

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

            const hash = fetchedUser.password
            // console.log(hash , fetchedUser.password);

            const ans = await bcrypt.compare(req.body.password , hash);
            if(ans == true){
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