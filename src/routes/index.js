const router = require('express').Router()

const {
    add_trip_controller,
    add_equipment_controller,
    get_trips_controller,
    get_equipments_controller
} = require('../controllers/index')



router.post('/add', add_trip_controller)
router.post('/add-equipment', add_equipment_controller)

router.get('/get-trips', get_trips_controller)
router.get('/get-equipments', get_equipments_controller)


module.exports = router
