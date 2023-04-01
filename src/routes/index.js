import { Router } from "express";
import doctorRoutes from "./doctorsRoutes.js";
import patientRoutes from "./patientsRoutes.js";

const routes = Router();

routes.use("/patients", patientRoutes);
routes.use("/doctors", doctorRoutes);

export default routes;

