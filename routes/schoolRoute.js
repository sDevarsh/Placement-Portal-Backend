import { Router } from "express";
import SchoolController from "../controller/schoolController.js";

const schoolRoute = new Router();

schoolRoute.get("/getAllSchools", SchoolController.getAll);
schoolRoute.get("/getSchoolById/:id", SchoolController.getSchoolById);

schoolRoute.delete("/deleteSchoolById/:id", SchoolController.deleteSchoolById);

export default schoolRoute;
