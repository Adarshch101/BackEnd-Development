

//import schema of todo

const Todo = require("../models/Todo");

//define the route handler


exports.getTodo = async (req, res) => {


    try {

        //fetch all todo items from database

        const todos = await Todo.find({});

        // response 
        res.status(200).json({
            sucess:true,
            data:todos,
            message:"entire data is fecthed",
        })
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            sucess:false,
            error:error.message,
            message:"server error",
        });
    }
};




exports.getTodoById = async(req,res)=>{
    try{
        const id = req.params.id;
        const todo = await Todo.findById( {_id: id});

        //data for given id not found

        if(!todo){
            return res.status(404).json({
                sucess:false,
                message:"no data found with given id",
            })
        }
        res.status(200).json({
            sucess:true,
            data:todo,
            message:`todo ${id} data successfully found`,
        })
    }
    catch(error){
        console.error(error);
        res.status(500).json({
            sucess:false,
            error:error.message,
            message:"server error",
        });
    }
}