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

async function verifyScheduledAppointments(req, res, next){
    const user = res.locals.user;
    try{
        const {rows: schedule } = await appointmentServices.verifyScheduledAppointments({ userId: user.id});
        return res.send({schedule});
    }catch(err){
        next(err);
    }
}

export default {
    createAppointment,
    verifyScheduledAppointments }