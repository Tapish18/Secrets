const User = require("../models/user").User

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
            password : req.body.password
        })
        console.log("User created Succesfully :", createdUser);
        return res.render("secrets.ejs")
    } catch (error) {
        console.log("Error occurred : ",error)
    }
    

}