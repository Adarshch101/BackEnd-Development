
const mongoose = require("mongoose");

require("dotenv").config();

const connectWithDb = () => {
    mongoose.connect(process.env.DATABASE_URL, {})
    .then(console.log("db connected successfully"))
    .catch((error) => {
        console.log("DB facing connection Issues");
        console.log(error);
        process.exit(1);
    })
}


module.exports = connectWithDb;