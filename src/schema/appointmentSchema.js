import joi from 'joi';
import { validateDate } from '../middlewares/validateDate.js'
import { validateTime } from '../middlewares/validateTime.js'

export const appointmentSchema = joi.object({
    doctorId: joi.number().min(1).required(),
    day: joi.string().required().custom(validateDate, 'custom date validation'),
    hour: joi.string().required().custom(validateTime, 'custom date validation'),
});