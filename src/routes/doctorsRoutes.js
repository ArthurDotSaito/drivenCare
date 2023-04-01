import { Router } from "express";
import { validadeSchema } from "../middlewares/validateSchema.js";
import { signUpSchema } from "../schema/doctorsSchema.js";
import doctorController from "../controllers/doctorController.js";

const doctorRoutes = Router();

doctorRoutes.post("/signIn", validadeSchema(signUpSchema), doctorController.createDoctor);
doctorRoutes.post("/signUp");

export default doctorRoutes