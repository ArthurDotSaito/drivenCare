import { Router } from "express";
import patientRoutes from "./patientsRoutes.js";

const routes = Router();

routes.use("/patients", patientRoutes);

export default routes;

