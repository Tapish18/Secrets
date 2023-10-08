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

const secret = "Iwillnotettledownuntillisucceed."
userSchema.plugin(encrypt , {secret : secret , encryptedFields : ['password']});


module.exports.User = mongoose.model("User",userSchema);