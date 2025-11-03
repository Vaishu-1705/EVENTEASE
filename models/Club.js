const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClubSchema = new Schema({
  name: { type: String, required: true, unique: true },
  slug: { type: String, required: true, unique: true },
  description: String,
  category: String,
  coverImage: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Club', ClubSchema);
