import { Router } from "express";
import EmailController from "../controller/emailController.js";

const emailRoute = new Router();

emailRoute.post("/getAllCompanies", EmailController.sendMail);

export default emailRoute;
