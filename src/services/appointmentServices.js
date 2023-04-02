import appointmentRepositories from "../repositories/appointmentRepositories.js";
import errors from '../errors/index.js'

async function createAppointment({userId, doctorId, day, hour }){
    const { rowCount } = await appointmentRepositories.findDuplicate({doctorId, day, hour});
    if(rowCount) throw errors.duplicatedAppointmentError();
    await appointmentRepositories.createAppointment({userId, doctorId, day, hour})
}

export default { createAppointment }