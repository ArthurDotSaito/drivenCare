import { Router } from "express";
import { validadeSchema } from "../middlewares/validateSchema.js";
import { authentication } from '../middlewares/authentication.js';
import { appointmentSchema } from "../schema/appointmentSchema.js";
import appointmentController from "../controllers/appointmentController.js";


const appoitmentRoutes = Router();

appoitmentRoutes.post("/patients", authentication("patient"), validadeSchema(appointmentSchema), appointmentController.createAppointment);


export default appoitmentRoutes