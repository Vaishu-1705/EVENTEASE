const express = require('express');
const router = express.Router();
const Event = require('../models/Event');

// list all events (with populated club)
router.get('/', async (req, res, next) => {
  try {
    const events = await Event.find().populate('club', 'name slug').sort({ date: 1 }).lean();
    res.json(events);
  } catch (err) { next(err); }
});

module.exports = router;
