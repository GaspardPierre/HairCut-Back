const express = require('express');
const router = express.Router();
const appointmentsController = require('../controllers/appointmentsController');


router.get('/',appointmentsController.getAllAppointment)
router.post('/', appointmentsController.createAppointment);
router.patch('/:id', appointmentsController.updateAppointment);
router.delete('/:id', appointmentsController.deleteAppointment);


module.exports = router;
