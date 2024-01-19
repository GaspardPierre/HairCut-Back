const Appointment = require('../models/Appointment');

//GET ALL APPOINTMENTS

exports.getAllAppointments = async (req, res) => {
  try {
    // Récupérer tous les rendez-vous de la base de données
    const appointments = await Appointment.find({});
   
    res.status(200).json(appointments);
  } catch (error) {
  
    res.status(500).json({ message: "Erreur lors de la récupération des rendez-vous", error: error });
  }
};

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
