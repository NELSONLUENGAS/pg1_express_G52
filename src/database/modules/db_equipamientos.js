const database = require('../config')


const agregarEquipamiento = async (nombre) => {

    const consulta = "INSERT INTO equipamiento values (DEFAULT, $1) RETURNING *"
    const values = [nombre]

    const result = await database.query(consulta, values)

    return {
        msg: 'Equipamiento agregado',
        data: result.rows[0]
    }
}

const obtenerEquipamientos = async () => {
    const consulta = "SELECT * FROM equipamiento"

    const { rows } = await database.query(consulta)

    return rows
}


module.exports = {
    agregarEquipamiento,
    obtenerEquipamientos
}