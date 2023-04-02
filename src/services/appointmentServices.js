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
    return await appointmentRepositories.verifyPatientScheduledAppointments({date, userId});
}

async function verifyDoctorScheduledAppointments({userId}){
    const date = dayjs().format("YYYY-MM-DD");
    return await appointmentRepositories.verifyDoctorScheduledAppointments({date, userId});
}

async function confirmAppointment({userId, id}){
    const {rowCount} = await appointmentRepositories.findAppointmentById({status: false, userId, id});
    if(!rowCount) throw errors.appointmentNotFound();

    await appointmentRepositories.confirmAppointment({status: true, userId, id})
}

async function cancelAppointment({userId, id}){
    const {rowCount} = await appointmentRepositories.findAppointmentById({status: false, userId, id});
    if(!rowCount) throw errors.appointmentNotFound();

    await appointmentRepositories.cancelAppointment({ userId, id})
}

export default { 
    createAppointment,
    verifyPatientScheduledAppointments,
    verifyDoctorScheduledAppointments,
    confirmAppointment,
    cancelAppointment}