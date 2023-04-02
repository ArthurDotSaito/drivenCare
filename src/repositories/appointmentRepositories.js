import connection from "../config/databaseConnection.js";

async function findDuplicate({doctorId, day, hour}){
    return await connection.query({
        text: `SELECT * FROM appointments WHERE doctor_id = $1 and appointmentday = $2
        AND (appointmenthour BETWEEN $3::time without time zone - INTERVAL '59 minutes' AND $3::time without time zone + INTERVAL '59 minutes')`,
        values:[doctorId, day, hour]
    })
}

async function createAppointment({userId, doctorId, day, hour }){
    return await connection.query({
        text:`INSERT INTO appointments (patient_id, doctor_id, appointmenthour, appointmentday) VALUES ($1, $2, $3, $4)`,
        values:[userId, doctorId, hour, day]
    })
}

export default {findDuplicate, createAppointment}