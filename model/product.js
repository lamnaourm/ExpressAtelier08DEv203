const mongoose=require('mongoose')
const {Schema}=require('mongoose')

const productSchema = new Schema({
    name: {type:String, required:true, unique: true},
    detail: String,
    price: Number,
    info: String,
    image: String
    
}, {collection: "prods"});

module.exports = mongoose.model("prods", productSchema, "prods");
