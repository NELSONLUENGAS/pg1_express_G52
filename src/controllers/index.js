const { agregarEquipamiento, obtenerEquipamientos } = require('../database/modules/db_equipamientos')
const { agregarViaje, obtenerViajes } = require('../database/modules/db_viajes')


const add_trip_controller = async (req, res, next) => {

    try {
        const { destino, presupuesto } = req.body

        const response = await agregarViaje(destino, presupuesto)
        res.send(response)

    } catch (error) {
        next(error)
    }
}

const add_equipment_controller = async (req, res, next) => {

    try {
        const { nombre } = req.body

        const response = await agregarEquipamiento(nombre)
        res.send(response)

    } catch (error) {
        next(error)
    }
}

const get_trips_controller = async (req, res, next) => {

    try {
        const response = await obtenerViajes()

        res.send(response)

    } catch (error) {
        next(error)
    }
}

const get_equipments_controller = async (req, res, next) => {

    try {
        const response = await obtenerEquipamientos()

        res.send(response)

    } catch (error) {
        next(error)
    }
}


module.exports = {
    add_trip_controller,
    add_equipment_controller,
    get_trips_controller,
    get_equipments_controller
}
