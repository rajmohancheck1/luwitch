const express = require('express');
const { createEvent, getEvents, getSingleEvent, updateEvent, deleteEvent } = require('../controllers/eventController');

const router = express.Router();

// Route for creating a new event
router.post('/events', createEvent);

// Route for getting all events
router.get('/events', getEvents);

// Route for getting a single event by ID
router.get('/events/:id', getSingleEvent);

// Route for updating an event by ID
router.put('/events/:id', updateEvent);

// Route for deleting an event by ID
router.delete('/events/:id', deleteEvent);

module.exports = router;
