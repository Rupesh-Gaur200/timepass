// server.js
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const sendEmail = require('./sendEmail'); // You will create this module

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());

app.post('/api/subscribe', async (req, res) => {
  const { name, email } = req.body;

  // Implement logic to store data if needed

  // Send automated email using Brevo APIs
  const emailResponse = await sendEmail(email, 'Thanks for Subscribing');

  if (emailResponse) {
    res.status(200).send('Subscription successful!');
  } else {
    res.status(500).send('Failed to send subscription email.');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
