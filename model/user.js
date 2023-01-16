const mongoose=require('mongoose')
const {Schema}=require('mongoose')

const userSchema = new Schema({
    email : {type:String, required:true, unique: true},
    first_name: String,
    last_name: String,
    password : String
}, {collection: "users"});

module.exports = mongoose.model("users", userSchema, "users");
