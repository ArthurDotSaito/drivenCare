import { Router } from "express";
import { validadeSchema } from "../middlewares/validateSchema.js";
import signUpSchema from '../schema/patientSchema.js'
import patientController from '../controllers/patientController.js'

const patientRoutes = Router();

patientRoutes.post("/signUp", validadeSchema(signUpSchema), patientController.createPatient);

export default patientRoutes;
