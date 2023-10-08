require("dotenv").config();

const mongoose = require("mongoose")
const encrypt = require("mongoose-encryption")
const userSchema = new mongoose.Schema({
    email : {
        type : String,
        required : true,
        unique : true
    },

    password : {
        type : String,
        required : true
    }
},{
    timestamps : true
})

// const secret = process.env.SECRET;
// userSchema.statics.secret = secret;
// userSchema.plugin(encrypt , {secret : secret , encryptedFields : ['password']});


module.exports.User = mongoose.model("User",userSchema);