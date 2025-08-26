//import schema of todo

const Todo = require("../models/Todo");

//define the route handler


exports.updateTodo = async (req, res) => {


    try {

        const { id } = req.params;
        const { title, description } = req.body;
        const todo = await Todo.findByIdAndUpdate(
            { _id: id },
            { title, description, updatedAt: Date.now() },
        )

        res.status(200).json({
            success: true,
            data: todo,
            message: `todo ${id} data successfully updated`
        })
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            sucess: false,
            error: error.message,
            message: "server error"
        });
    }
};