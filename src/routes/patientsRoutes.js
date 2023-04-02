import { Router } from "express";
import { validadeSchema } from "../middlewares/validateSchema.js";
import {signUpSchema} from '../schema/patientSchema.js';
import patientController from '../controllers/patientController.js';
import { authentication } from '../middlewares/authentication.js'

const patientRoutes = Router();

patientRoutes.post("/signUp", validadeSchema(signUpSchema), patientController.createPatient);
patientRoutes.post("/signIn", patientController.signIn);
patientRoutes.get('/doctor-by-name/:name', authentication("patient"), patientController.doctorsByName)

export default patientRoutes;
