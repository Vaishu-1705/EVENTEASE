// Simple seed script to populate example clubs and events.
require('dotenv').config();
const mongoose = require('mongoose');
const Club = require('../models/Club');
const Event = require('../models/Event');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/eventease';

const sample = async () => {
  await mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  console.log('Connected to MongoDB for seeding');
  await Event.deleteMany({});
  await Club.deleteMany({});

  const clubs = [
    { name: 'Music Club', slug: 'music-club', description: 'Music lovers, bands and acoustic nights', category: 'Arts' },
    { name: 'Dance Club', slug: 'dance-club', description: 'Western, classical and fusion dance', category: 'Arts' },
    { name: 'Theater Arts Club', slug: 'theater-arts-club', description: 'Drama, plays and improv', category: 'Arts' },
    { name: 'Technical Design Club', slug: 'technical-design-club', description: 'Hackathons, showcases and workshops', category: 'Tech' },
    { name: 'Fashion Club', slug: 'fashion-club', description: 'Ramp shows and fashion nights', category: 'Lifestyle' },
  ];

  const createdClubs = await Club.insertMany(clubs);

  const events = [
    { club: createdClubs[0]._id, title: 'Opening Concert at Mahotsav', date: new Date(Date.now() + 7*24*3600*1000), location: 'Main Auditorium' },
    { club: createdClubs[0]._id, title: 'Acoustic Night', date: new Date(Date.now() + 14*24*3600*1000), location: 'Cafeteria Stage' },
    { club: createdClubs[1]._id, title: 'Dance Extravaganza', date: new Date(Date.now() + 10*24*3600*1000), location: 'Open Stage' },
    { club: createdClubs[3]._id, title: 'Innovation Showcase', date: new Date(Date.now() + 20*24*3600*1000), location: 'Tech Park' },
    { club: createdClubs[4]._id, title: 'Mahotsav Fashion Night', date: new Date(Date.now() + 18*24*3600*1000), location: 'Fashion Arena' },
  ];

  await Event.insertMany(events);
  console.log('Seeded clubs and events');
  mongoose.disconnect();
};

sample().catch(err => {
  console.error(err);
  process.exit(1);
});
