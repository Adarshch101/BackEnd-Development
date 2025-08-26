const mongoose = require("mongoose");

require("dotenv").config();

const dbconnect = ()=>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>console.log("connection succesfull"))
    .catch((error)=>{
        console.log("issue in connection");
        console.log(error.message);
        process.exit(1);
    })
}

module.exports = dbconnect;