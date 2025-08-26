//import schema of todo

const Todo = require("../models/Todo");

//define the route handler


exports.createTodo = async (req, res) => {


    try {

        //extract title and description from request body
        const { title, description } = req.body;
        //create a new todo object and insert in dv
        const response = await Todo.create({ title, description });
        //send a json respose with success flag

        res.status(201).json({
                success: true,
                data: response,
                message: "entry created sucessfully"
            });

    }
    catch (error) {
        console.error(error);
        console.log(error);
        res.status(500).json({
            success:false,
            data:"internal server error",
            message:error.message
        });
    }
};