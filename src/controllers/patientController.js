import patientServices from '../services/patientServices.js'

async function createPatient(req, res, next){
    const {name, email, password} = req.body
    try{
        await patient.createPatient({name, email, password});
        return res.sendStatus(201);
    }catch(error){
        next(error);
    }
}

export default{
    createPatient
}