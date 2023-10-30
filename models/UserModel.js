const mongoose = require("mongoose")
const {Schema,model} = mongoose;

const UserSchema = new Schema({
    username : {
        type : String,
        unique : true,
        required : true
    },
    email : {
        type : String,
        unique : true,
        required : true

    },
    password : {
        type : String,
        minLength : 8
    }
})

module.exports = model("Users",UserSchema)