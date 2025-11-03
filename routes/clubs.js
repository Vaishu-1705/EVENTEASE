const express = require('express');
const router = express.Router();
const Club = require('../models/Club');
const Event = require('../models/Event');

// list clubs
router.get('/', async (req, res, next) => {
  try {
    const clubs = await Club.find().lean();
    res.json(clubs);
  } catch (err) { next(err); }
});

// get club by id
router.get('/:id', async (req, res, next) => {
  try {
    const club = await Club.findById(req.params.id).lean();
    if (!club) return res.status(404).json({ error: 'Club not found' });
    res.json(club);
  } catch (err) { next(err); }
});

// create club
router.post('/', async (req, res, next) => {
  try {
    const { name, description, category, coverImage } = req.body;
    const slug = (name || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g,'');
    const club = new Club({ name, slug, description, category, coverImage });
    await club.save();
    res.status(201).json(club);
  } catch (err) { next(err); }
});

// get events for club
router.get('/:id/events', async (req, res, next) => {
  try {
    const events = await Event.find({ club: req.params.id }).sort({ date: 1 }).lean();
    res.json(events);
  } catch (err) { next(err); }
});

// create event for club
router.post('/:id/events', async (req, res, next) => {
  try {
    const clubId = req.params.id;
    const club = await Club.findById(clubId);
    if (!club) return res.status(404).json({ error: 'Club not found' });
    const { title, description, location, date, durationMinutes } = req.body;
    const event = new Event({ club: clubId, title, description, location, date, durationMinutes });
    await event.save();
    res.status(201).json(event);
  } catch (err) { next(err); }
});

module.exports = router;
