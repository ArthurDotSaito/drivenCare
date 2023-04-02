import appointmentRepositories from "../repositories/appointmentRepositories.js";
import errors from '../errors/index.js';
import dayjs from "dayjs";

async function createAppointment({userId, doctorId, day, hour }){
    const { rowCount } = await appointmentRepositories.findDuplicate({doctorId, day, hour});
    if(rowCount) throw errors.duplicatedAppointmentError();
    await appointmentRepositories.createAppointment({userId, doctorId, day, hour})
}

async function verifyPatientScheduledAppointments({userId}){
    const date = dayjs().format("YYYY-MM-DD");
    return await appointmentRepositories.verifyPatientScheduledAppointments({date, userId})
}

async function verifyDoctorScheduledAppointments({userId}){
    const date = dayjs().format("YYYY-MM-DD");
    return await appointmentRepositories.verifyDoctorScheduledAppointments({date, userId})
}


export default { 
    createAppointment,
    verifyPatientScheduledAppointments,
    verifyDoctorScheduledAppointments }