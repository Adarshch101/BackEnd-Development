const express = require('express');
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 4000;

//need a middleware to parse json request body


app.use(express.json());

//import routes for todo api

const todoRoutes = require("./routes/Todos");


//mount the todo apis routes

app.use("/api/v1",todoRoutes);
const dbconnect = require("./config/database");
dbconnect();


//start server

app.listen(PORT,()=>{

    console.log(`server started at ${PORT}`);
});

app.get("/",(req,res)=>{ 
    res.send(`<h1>this is home page</h1>`);
});