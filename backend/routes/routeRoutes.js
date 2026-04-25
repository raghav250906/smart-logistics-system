import express from "express";
import { predictRoute } from "../controllers/routeController.js";

const router = express.Router();

router.post("/predict", predictRoute);

export default router;