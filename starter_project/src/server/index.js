const express = require('express');
const fetch = require('node-fetch');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const port = 8000;

app.use(express.json());

app.post('/api', async (req, res) => {
    const { url } = req.body;

    const apiURL = `https://api.meaningcloud.com/sentiment-2.1`;
    const API_ID = process.env.API_ID;
    const API_KEY = process.env.API_KEY;

    // API request body
    const body = {
        key: API_KEY,
        txt: url,  // Text data to be analyzed
        lang: 'en' // Language of the text
    };

    try {
        const response = await fetch(apiURL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams(body),
        });

        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error calling API:', error);
        res.status(500).send('Error processing request');
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
