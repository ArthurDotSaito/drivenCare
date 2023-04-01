import { Router } from "express";
import { validadeSchema } from "../middlewares/validateSchema.js";
import { signUpSchema } from "../schema/doctorsSchema";
import doctorController from "../controllers/doctorController.js";

const doctorRoutes = Router();

doctorRoutes.use("/signIn", validadeSchema(signUpSchema), doctorController.createDoctor);
doctorRoutes.use("/signUp");

export default doctorRoutes