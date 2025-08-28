


const express = require("express");

const router = express.Router();


const {addEmployee,removeEmployee,viewEmployeeById,viewAllEmployees} = require("../controller/employeeController");

const {updateSalary,updateCity,updateDepartment,updateName} = require("../controller/employeeController");

router.post("/emp/add",addEmployee);

router.delete("/emp/remove/:id",removeEmployee);

router.get("/emp/:id",viewEmployeeById);

router.get("/emp",viewAllEmployees);

router.put("/emp/updatename/:id",updateName);

router.put("/emp/updatsalary/:id",updateSalary);

router.put("/emp/updatedepartment/:id",updateDepartment);

router.put("/emp/updatecity/:id",updateCity);


module.exports = router;