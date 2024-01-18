// models/Appointment.js

const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  date: Date,
  startTime: String,
  endTime: String,
  clientName: String,
  phone: Number,
  email: String,
  clientId: String
});

module.exports = mongoose.model('Appointment', appointmentSchema);
