import { Router } from "express";
import DepartmentController from "../controller/departmentController.js";

const departmentRoute = new Router();

departmentRoute.get("/getAllDepartments", DepartmentController.getAll);
departmentRoute.get("/getDepartmentById/:id", DepartmentController.getDepartmentById);

departmentRoute.post("/insertDepartment", DepartmentController.insertNewDepartment);

departmentRoute.delete("/deleteDepartmentById/:id", DepartmentController.deleteDepartmentById);

departmentRoute.put("/updateDepartmentById/:id", DepartmentController.updateDepartmentById);

export default departmentRoute;
