import appointmentServices from "../services/appointmentServices.js";

async function createAppointment(req, res, next){
    const { doctorId, day, hour} = req.body;
    const user = res.locals.user;

    try{
        await appointmentServices.createAppointment({userId:user.id, doctorId, day, hour});
        return res.sendStatus(202);
    }catch(err){
        next(err);
    }
}

async function verifyPatientScheduledAppointments(req, res, next){
    const user = res.locals.user;
    try{
        const {rows: schedule } = await appointmentServices.verifyPatientScheduledAppointments({ userId: user.id});
        return res.send({schedule});
    }catch(err){
        next(err);
    }
}

async function verifyDoctorScheduledAppointments(req, res, next){
    const user = res.locals.user;
    try{
        const {rows: schedule } = await appointmentServices.verifyDoctorScheduledAppointments({ userId: user.id});
        return res.send({schedule});
    }catch(err){
        next(err);
    }
}

export default {
    createAppointment,
    verifyPatientScheduledAppointments,
    verifyDoctorScheduledAppointments}