import { Router } from "express";
import { validadeSchema } from "../middlewares/validateSchema.js";
import { authentication } from '../middlewares/authentication.js';
import { appointmentSchema } from "../schema/appointmentSchema.js";
import appointmentController from "../controllers/appointmentController.js";


const appointmentRoutes = Router();

appointmentRoutes.post("/patients", authentication("patient"), validadeSchema(appointmentSchema), appointmentController.createAppointment);
appointmentRoutes.get("/patients", authentication("patient"), appointmentController.verifyScheduledAppointments);

export default appointmentRoutes