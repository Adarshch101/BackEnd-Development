const express = require("express");

const app = express();


require("dotenv").config();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const Ems = require("./router/Ems");

app.use("/api/v1",Ems);

const connectWithDb = require("./config/Database");
connectWithDb();

app.listen(PORT,()=>{
    console.log(`server is running successfully at port ${PORT}`);
})


app.get("/",(req,res)=>{
    res.send("<h1>this is EMS home page</h1>");
})


