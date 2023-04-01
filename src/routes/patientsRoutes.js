import { Router } from "express";
import { validadeSchema } from "../middlewares/validateSchema";
import {signUpSchema} from '../schema/patientSchema.js'
import patientController from '../controllers/patientController.js'

const patientRoutes = Router();

patientRoutes.use("/signUp", validadeSchema(signUpSchema), patientController.createPatient);
patientRoutes.use("/signIn");
