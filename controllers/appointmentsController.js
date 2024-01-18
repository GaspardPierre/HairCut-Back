const Appointment = require('../models/Appointment');

// CREATE RDV

exports.createAppointment = async (req, res) => {
  const appointment = new Appointment(req.body);
  try {
    await appointment.save();
    res.status(201).send(appointment);
  } catch (e) {
    res.status(400).send(e);
  }
};
// UPDATE RDV
exports.updateAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!appointment) {
      return res.status(404).send();
    }
    res.send(appointment);
  } catch (e) {
    res.status(400).send(e);
  }
};
// DELETE RDV
exports.deleteAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.findByIdAndDelete(req.params.id);
    if (!appointment) {
      return res.status(404).send();
    }
    res.send(appointment);
  } catch (e) {
    res.status(500).send(e);
  }
};
