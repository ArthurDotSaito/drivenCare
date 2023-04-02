import connection from '../config/databaseConnection.js'

async function createDoctor({name, email, password, specialty, state, city, address}){
    await connection.query({
        text:`INSERT INTO doctors (name, email, password, specialty, state, city, address) 
        VALUES ($1, $2, $3, $4, $5 ,$6, $7 )`,
        values: [name, email, password, specialty, state, city, address ]
    });
}

async function findByEmail(email){
    return await connection.query(`SELECT * FROM doctors WHERE email = $1`, [email]);
}

async function findById(id){
    return await connection.query(`SELECT * FROM doctors WHERE id = $1`, [id]);
}

async function findByName(name) {
    return await connection.query(` SELECT id, name, specialty, city, address FROM doctors WHERE name LIKE $1`,[name]);
}

export default {createDoctor, findByEmail, findById, findByName}