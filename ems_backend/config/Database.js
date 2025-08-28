

const mongoose = require("mongoose");

require("dotenv").config();

const connectWithDb = ()=>{
    mongoose.connect(process.env.DATABASE_URL,{})
    .then(console.log("DB connected successfully"))
    .catch((error)=>{
        console.log("failed while connecting with DB")
        console.log(error);
        process.exit(1);
    })
}

module.exports = connectWithDb;