import { Router } from "express";
import PlacementController from "../controller/placementController.js";

const placementRoute = new Router();

placementRoute.get("/getAllPlacements", PlacementController.getAll);
placementRoute.get("/getPlacementById/:id", PlacementController.getPlacementById);

placementRoute.post("/insertPlacement", PlacementController.insertNewPlacement);

placementRoute.delete("/deletePlacementById/:id", PlacementController.deletePlacementById);

placementRoute.put("/updatePlacementById/:id", PlacementController.updatePlacementById);

export default placementRoute;
