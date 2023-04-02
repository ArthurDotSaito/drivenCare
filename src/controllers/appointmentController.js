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

export default { createAppointment }