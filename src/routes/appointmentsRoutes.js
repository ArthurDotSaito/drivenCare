import { Router } from "express";
import { validadeSchema } from "../middlewares/validateSchema.js";
import { authentication } from '../middlewares/authentication.js';
import { appointmentSchema } from "../schema/appointmentSchema.js";
import appointmentController from "../controllers/appointmentController.js";


const appointmentRoutes = Router();

appointmentRoutes.post("/patients", authentication("patient"), validadeSchema(appointmentSchema), appointmentController.createAppointment);
appointmentRoutes.get("/patients", authentication("patient"), appointmentController.verifyPatientScheduledAppointments);
appointmentRoutes.get("/doctors", authentication("doctor"), appointmentController.verifyDoctorScheduledAppointments);
appointmentRoutes.post("/doctors/:id", authentication("doctor"), appointmentController.confirmAppointment);

export default appointmentRoutes