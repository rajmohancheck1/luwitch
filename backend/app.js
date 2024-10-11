const express = require('express');
const cors = require('cors');
const eventRoutes = require('./routes/eventRoutes');

const app = express();
app.use(cors());
app.use(express.json());

// Use the event routes
app.use('/api', eventRoutes);

module.exports = app;
