import doctorServices from "../services/doctorServices.js";

async function createDoctor(req, res, next){
    const {name, email, password, specialty, state, city, address} = req.body
    try{
        await doctorServices.createDoctor({name, email, password, specialty, state, city, address});
        return res.sendStatus(201);
    }catch(error){
        next(error);
    }
}

export default {createDoctor}