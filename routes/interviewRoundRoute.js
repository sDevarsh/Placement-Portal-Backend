import { Router } from "express";

import InterviewRoundController from "../controller/interviewRoundController.js";
const interviewRoundRoute = new Router();

interviewRoundRoute.post(
  "/interview_round",
  InterviewRoundController.insertRound
);
interviewRoundRoute.get(
  "/interview_round",
  InterviewRoundController.getAllRounds
);
interviewRoundRoute.get(
  "/interview_round/:round_id",
  InterviewRoundController.getRoundById
);
interviewRoundRoute.put(
  "/interview_round/:round_id",
  InterviewRoundController.updateRoundById
);
interviewRoundRoute.delete(
  "/interview_round/:round_id",
  InterviewRoundController.deleteRoundById
);
interviewRoundRoute.get(
  "/interview_round/company/:company_id",
  InterviewRoundController.getRoundsByCompanyId
);

export default interviewRoundRoute;
