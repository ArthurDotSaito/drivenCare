import { Router } from "express";

const patientRoutes = Router();

patientRoutes.use("/signIn");
patientRoutes.use("/signUp");