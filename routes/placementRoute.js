import { Router } from "express";

const placementRoute = new Router();
placementRoute.get("/getAllPlacements");
placementRoute.get("/getPlacementById/:id");

placementRoute.post("/insertPlacement");

placementRoute.delete("/deletePlacementById/:id");

placementRoute.put("/updatePlacementById/:id");

export default placementRoute;
