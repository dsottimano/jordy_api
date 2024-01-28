const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// GET route
app.get('/api/data', (req, res) => {
  res.json({ message: 'GET request received' });
});

// POST route
app.post('/api/data', (req, res) => {
  const data = req.body;
  res.json({ message: 'POST request received', data });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
