import { Router } from "express";

const departmentRoute = new Router();
departmentRoute.get("/getAllDepartments");
departmentRoute.get("/getDepartmentById/:id");

departmentRoute.post("/insertDepartment");

departmentRoute.delete("/deleteDepartmentById/:id");

departmentRoute.put("/updateDepartmentById/:id");

export default departmentRoute;
