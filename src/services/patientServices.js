import patientRepositories from '../repositories/patientRepositories.js'
import errors from '../errors/index.js'
import bcrypt from 'bcrypt'

async function createPatient({name, email, password}){
    console.log("patient Services")
    const { rowCount } = await patientRepositories.findByEmail(email);
    if (rowCount) throw errors.duplicatedEmailError(email);

    const saltRounds = 10;
    const hashPassword = await bcrypt.hash(password, saltRounds);
    await patientRepositories.createPatient({name, email, password: hashPassword});
}

export default {createPatient}