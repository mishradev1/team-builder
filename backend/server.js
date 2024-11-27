// server.js

const express = require('express');
const HenrikDevValorantAPI = require('unofficial-valorant-api');  // Import the API package

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // To parse JSON data

// Initialize the API with your API key
const VAPI = new HenrikDevValorantAPI('HDEV-32544a64-082a-417c-9ead-0191df119dd4');  // Include the API key here

// Endpoint to get player data by name and tag
app.post('/getPlayer', async (req, res) => {
    try {
        const { name, tag } = req.body;
        
        // Check if name and tag are provided
        if (!name || !tag) {
            return res.status(400).json({ error: 'Name and tag are required' });
        }

        // Fetch player data using unofficial-valorant-api
        const playerData = await VAPI.getAccount({ name, tag });

        // Send the player data as response
        res.json(playerData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error fetching player data' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
