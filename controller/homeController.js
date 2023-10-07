module.exports.showHome = function(req,res,err){
    return res.render("home.ejs");
}

module.exports.register = function(req,res,err){
    return res.render("register.ejs")
}

module.exports.login = function(req,res,err){
    return res.render("login.ejs")
}