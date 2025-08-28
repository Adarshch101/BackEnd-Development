

const Ems = require("../models/employee");

exports.addEmployee = async (req, res) => {

    try {
        const { name, salary, department, city } = req.body;
        const ems = new Ems({
            name, salary, department, city
        });
        const newEms = await ems.save();

        res.status(200).json({
            ems: newEms,
            message: "new employee added in the db",
        })

    }
    catch (error) {
        return res.status(500).json({
            error: "error while adding new employee in the db",
        })
    }
};


exports.removeEmployee = async (req, res) => {

    try {

        const { id } = req.params;

        const removedEmployee = await Ems.findByIdAndDelete(id);
        res.status(200).json({
            success: true,
            data: removedEmployee,
            message: "Employee removed successfully"
        })
    }
    catch (error) {
        return res.status(500).json({
            error: "error while removing Employee from Database"
        })
    }

};



exports.viewEmployeeById = async (req, res) => {

    try {
        const { id } = req.params;
        const detail = await Ems.findById(id);
        res.status(200).json({
            success: true,
            data: detail,
            message: "employee details fetched successfully"
        })
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "error while fetching data of the employee"
        })
    }

};


exports.viewAllEmployees = async (req, res) => {


    try {

        const employees = await Ems.find({});
        res.status(200).json({
            success: true,
            data: employees,
            message: "all the employees details are fetched from database"
        })

    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "error while fetching all employees data"
        })

    }
}


exports.updateSalary = async (req,res) =>{

    try{

        const {id} = req.params;
        const {salary} = req.body;
        const updatedEmp = await Ems.findByIdAndUpdate(id,{salary},{new:true});
        res.status(200).json({
            success:true,
            data:updatedEmp,
            message:"salary updated successfully"
        })

    }
    catch(error){

        return res.status(500).json({
            success:false,
            message:"salary updation failed"
        })
    }
}



exports.updateName = async (req,res) =>{

    try{

        const {id} = req.params;
        const {name} = req.body;
        const updatedEmp = await Ems.findByIdAndUpdate(id,{name},{new:true});
        res.status(200).json({
            success:true,
            data:updatedEmp,
            message:"salary updated successfully"
        })

    }
    catch(error){

        return res.status(500).json({
            success:false,
            message:"salary updation failed"
        })
    }
}



exports.updateDepartment = async (req,res) =>{

    try{

        const {id} = req.params;
        const {department} = req.body;
        const updatedEmp = await Ems.findByIdAndUpdate(id,{department},{new:true});
        res.status(200).json({
            success:true,
            data:updatedEmp,
            message:"salary updated successfully"
        })

    }
    catch(error){

        return res.status(500).json({
            success:false,
            message:"salary updation failed"
        })
    }
}




exports.updateCity = async (req,res) =>{

    try{

        const {id} = req.params;
        const {city} = req.body;
        const updatedEmp = await Ems.findByIdAndUpdate(id,{city},{new:true});
        res.status(200).json({
            success:true,
            data:updatedEmp,
            message:"salary updated successfully"
        })

    }
    catch(error){

        return res.status(500).json({
            success:false,
            message:"salary updation failed"
        })
    }
}
