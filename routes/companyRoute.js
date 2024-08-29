import { Router } from "express";
import CompanyController from "../controller/companyController.js";

const companyRoute = new Router();

companyRoute.get("/getAllCompanies", CompanyController.getAll);
companyRoute.get("/getCompanyById/:id", CompanyController.getCompanyById);

companyRoute.post("/insertCompany", CompanyController.insertNewCompany);

companyRoute.delete("/deleteCompanyById/:id", CompanyController.deleteCompanyById);

companyRoute.put("/updateCompanyById/:id", CompanyController.updateCompanyById);

export default companyRoute;
