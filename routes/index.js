import { Router } from "express";
import companyRoute from "./companyRoute.js";
import schoolRoute from "./schoolRoute.js";
import departmentRoute from "./departmentRoute.js";
import studentRoute from "./studentRoute.js";
import placementRoute from "./placementRoute.js";
import emailRoute from "./emailRoute.js";
const routes = new Router();
routes.use("/student", studentRoute);
routes.use("/school", schoolRoute);

routes.use("/department", departmentRoute);

routes.use("/company", companyRoute);

routes.use("/placement", placementRoute);

routes.use("/email", emailRoute);
export default routes;
