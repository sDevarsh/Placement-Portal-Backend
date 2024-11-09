import { Router } from "express";

import InterviewRoundController from "../controller/interviewRoundController.js";
const interviewRoundRoute = new Router();

interviewRoundRoute.post("/insert", InterviewRoundController.insertRound);
interviewRoundRoute.get("/getAll", InterviewRoundController.getAllRounds);
interviewRoundRoute.get(
  "/getByRoundId/:round_id",
  InterviewRoundController.getRoundById
);
interviewRoundRoute.put(
  "/update/:round_id",
  InterviewRoundController.updateRoundById
);
interviewRoundRoute.delete(
  "/delete/:round_id",
  InterviewRoundController.deleteRoundById
);
interviewRoundRoute.get(
  "/getByCompanyId/:company_id",
  InterviewRoundController.getRoundsByCompanyId
);

export default interviewRoundRoute;
