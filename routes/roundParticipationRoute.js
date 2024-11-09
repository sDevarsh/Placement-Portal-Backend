import { Router } from "express";
import RoundParticipationController from "../controller/roundParticipationController.js";

const roundParticipationRoute = new Router();

roundParticipationRoute.post(
  "/insert",
  RoundParticipationController.insertParticipation
);
roundParticipationRoute.get(
  "/getAll",
  RoundParticipationController.getAllParticipations
);
roundParticipationRoute.get(
  "/getStudentsIdByRoundId/:round_id",
  RoundParticipationController.getParticipationsByRoundId
);
roundParticipationRoute.delete(
  "/delete/:participation_id",
  RoundParticipationController.deleteParticipationById
);
roundParticipationRoute.get(
  "/getStudentsByRoundId/:round_id",
  RoundParticipationController.getStudentsByRoundId
);
export default roundParticipationRoute;
