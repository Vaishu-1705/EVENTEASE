const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  club: { type: Schema.Types.ObjectId, ref: 'Club', required: true },
  title: { type: String, required: true },
  description: String,
  location: String,
  date: { type: Date, required: true },
  durationMinutes: Number,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Event', EventSchema);
