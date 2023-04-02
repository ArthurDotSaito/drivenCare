import appointmentRepositories from "../repositories/appointmentRepositories.js";
import errors from '../errors/index.js';
import dayjs from "dayjs";

async function createAppointment({userId, doctorId, day, hour }){
    const { rowCount } = await appointmentRepositories.findDuplicate({doctorId, day, hour});
    if(rowCount) throw errors.duplicatedAppointmentError();
    await appointmentRepositories.createAppointment({userId, doctorId, day, hour})
}

async function verifyScheduledAppointments({userId}){
    const date = dayjs().format("YYYY-MM-DD");
    return await appointmentRepositories.verifyScheduledAppointments({date, userId})
}

export default { 
    createAppointment,
    verifyScheduledAppointments }