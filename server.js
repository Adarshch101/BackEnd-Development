const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.listen(3000,()=>{
    console.log("server started at port no. 3000");
});


app.get('/',(req,res)=>{
    res.send("hello ,my name is ADARSH");
})


app.post('/api/cars',(req,res)=>{
    const {name,brand} = req.body;
    console.log(name);
    console.log(brand);
    res.send("car submitted succesfully");
})


const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/adarshData',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{console.log("connection succesfull")})
.catch((error)=>{console.log("error occured")});