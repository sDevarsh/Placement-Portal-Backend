import { Router } from "express";

const companyRoute = new Router();
companyRoute.get("/getAllCompanies");
companyRoute.get("/getCompanyById/:id");

companyRoute.post("/insertCompany");

companyRoute.delete("/deleteCompanyById/:id");

companyRoute.put("/updateCompanyById/:id");

export default companyRoute;
