import { Router } from "express";

const schoolRoute = new Router();
schoolRoute.get("/getAllSchools");
schoolRoute.get("/getSchoolById/:id");

export default schoolRoute;
