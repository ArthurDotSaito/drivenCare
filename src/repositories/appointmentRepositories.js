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

async function verifyScheduledAppointments({date, userId}){
    console.log(userId)
    console.log(date)
    return await connection.query(
        `
        SELECT 
        a.id, p.name AS patient, d.name AS doctor, d.specialty, a.appointmentday, a.appointmenthour,
        a.confirmed, a.canceled  
        FROM appointments a 
        JOIN patients p ON p.id = a.patient_id 
        JOIN doctors d ON d.id = a.doctor_id 
        WHERE a.patient_id = 1 AND a.appointmentday >= '2023-04-02'
        `
    );
}

export default {
    findDuplicate, 
    createAppointment,
    verifyScheduledAppointments}