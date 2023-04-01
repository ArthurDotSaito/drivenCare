import patientServices from '../services/patientServices.js'

async function createPatient(req, res, next){
    const {name, email, password} = req.body
    console.log("Create patient")
    try{
        await patientServices.createPatient({name, email, password});
        console.log("Create patient")
        return res.sendStatus(201);
    }catch(error){
        next(error);
    }
}

export default{
    createPatient
}