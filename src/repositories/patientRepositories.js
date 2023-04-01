import connection from '../config/databaseConnection.js'

async function createUser({name, email, password}){
    await connection.query({
        text:'INSERT INTO patients (name, email, password) VALUES ($1, $2, $3)',
        values: [name, email, password]
    });
}

async function findByEmail(email){
    return await connection.query(`SELECT * FROM patients WHERE email = $1`, [email]);
}

export {createUser, findByEmail}