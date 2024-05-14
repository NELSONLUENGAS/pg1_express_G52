const database = require('../config')


const agregarViaje = async (destino, presupuesto) => {

    const consulta = "INSERT INTO viajes values (DEFAULT, $1, $2) RETURNING *"
    const values = [destino, presupuesto]

    const result = await database.query(consulta, values)

    return {
        msg: 'Viaje agregado',
        data: result.rows[0]
    }
}

const obtenerViajes = async () => {
    const consulta = "SELECT * FROM viajes"

    const { rows } = await database.query(consulta)

    return rows
}


module.exports = {
    agregarViaje,
    obtenerViajes
}