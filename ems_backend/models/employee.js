


const mongoose = require("mongoose");


const emsSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        maxLength : 50
    },
    salary:{
        type:Number,
        required:true,
        maxLength:10
    },
    department:{
        type:String,
        required:true,
        maxLength:20
    },
    city:{
        type:String,
        required:true,
        maxLength:40
    }

});


module.exports = mongoose.model("Ems",emsSchema);