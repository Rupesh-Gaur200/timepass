// server.js
require('dotenv').config();
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const sendEmail = require('./sendEmail'); // You will create this module

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(cors());




app.post('/api/subscribe', async (req, res) => {

  const { name, email } = req.body;

  console.log(name)

  
  

  // Implement logic to store data if needed

  // Send automated email using Brevo APIs
  
  const emailResponse = true;

  if (emailResponse) {
    res.status(200).send('Subscription successful!');
  } else {
    res.status(500).send('Failed to send subscription email.');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
