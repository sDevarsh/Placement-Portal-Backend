import { Router } from "express";
import StudentController from "../controller/studentController.js";
const studentRoute = new Router();
studentRoute.get("/getAllStudents", StudentController.getAll);
studentRoute.get("/getStudentById/:id", StudentController.getStudentById);

studentRoute.get(
  "/getStudentByRollNumber/:rollNumber",
  StudentController.getByRollNumber
);

studentRoute.post("/insertStudent", StudentController.insertNewStudent);

studentRoute.delete(
  "/deleteStudentById/:id",
  StudentController.deleteStudentById
);

studentRoute.delete(
  "/deleteStudentByRollNumber/:rollNumber",
  StudentController.deleteStudentByRollNumber
);

studentRoute.put("/updateStudentById/:id", StudentController.updateStudentById);

export default studentRoute;
