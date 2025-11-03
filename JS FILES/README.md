# EventEase — Backend (Express + Node.js + MongoDB)

This repository contains a simple backend for the EventEase frontend. It uses Express, Mongoose and provides REST endpoints for clubs and events.

## Features
- REST API for clubs and events
- MongoDB (Mongoose) models for Club and Event
- Seed script to populate example clubs & events
- CORS enabled for frontend usage

## Setup (local)
1. Install dependencies:
   ```bash
   npm install
   ```
2. Create `.env` from `.env.example` and set `MONGODB_URI`.
3. Ensure MongoDB is running locally, or use a cloud MongoDB URI.
4. (Optional) Seed database with sample data:
   ```bash
   npm run seed
   ```
5. Start server:
   ```bash
   npm run dev
   # or
   npm start
   ```
6. API base: `http://localhost:5000/api`

## Important endpoints
- `GET /api/clubs` — list all clubs
- `GET /api/clubs/:id` — club details
- `POST /api/clubs` — create a club
- `GET /api/clubs/:id/events` — events for a club
- `POST /api/clubs/:id/events` — create event for club
- `GET /api/events` — list all events

## How to upload to GitHub
From inside this project directory:
```bash
git init
git add .
git commit -m "Initial EventEase backend"
# create a repository on github.com manually, then:
git remote add origin git@github.com:<your-username>/eventease-backend.git
git branch -M main
git push -u origin main
```
Or use HTTPS remote:
```bash
git remote add origin https://github.com/<your-username>/eventease-backend.git
git push -u origin main
```

## Notes
- This project is a starting point. For production, add authentication, validation, rate-limiting, and deploy securely.
