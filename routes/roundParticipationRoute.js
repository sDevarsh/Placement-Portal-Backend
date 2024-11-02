import { Router } from "express";
import RoundParticipationController from "../controller/roundParticipationController.js";

const roundParticipationRoute = new Router();

roundParticipationRoute.post(
  "/round_participation",
  RoundParticipationController.insertParticipation
);
roundParticipationRoute.get(
  "/round_participation",
  RoundParticipationController.getAllParticipations
);
roundParticipationRoute.get(
  "/round_participation/round/:round_id",
  RoundParticipationController.getParticipationsByRoundId
);
roundParticipationRoute.delete(
  "/round_participation/:participation_id",
  RoundParticipationController.deleteParticipationById
);
roundParticipationRoute.get(
  "/round_participation/round/:round_id",
  RoundParticipationController.getStudentsByRoundId
);
export default roundParticipationRoute;
