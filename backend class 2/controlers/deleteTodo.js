//import schema of todo

const Todo = require("../models/Todo");

//define the route handler


exports.deleteTodo = async (req, res) => {


    try {

        const { id } = req.params;
        const todo = await Todo.findByIdAndDelete(id);
        res.status(200).json({
            success: true,
            data: todo,
            message: "todo deleted sucessfully"
        })

    }
    catch (error) {
        console.error(error);
        console.log(error);
        res.status(500).json({
            success: false,
            data: "internal server error",
            message: error.message
        });
    }
};