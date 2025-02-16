const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files (like images) from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Route for the front page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route for the main page with animal pictures
app.get('/gallery', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'gallery.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});