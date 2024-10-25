
require('dotenv').config(); // Load .env variables
const express = require('express');
const fetch = require('node-fetch');
const app = express();
const PORT = 3000;

// Endpoint for fetching weather data
app.get('/weather', async (req, res) => {
    const city = req.query.city;
    const apiKey = process.env.API_KEY;

    // Handle missing city input
    if (!city) {
        return res.status(400).json({ error: 'City is required' });
    }

    // Fetch weather data from OpenWeatherMap
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
        const data = await response.json();

        // Forward the response data to the front end
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching weather data' });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});