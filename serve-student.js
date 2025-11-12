const path = require('path');
const express = require('express');
const app = express();
const PORT = 5002;

app.use(express.static(path.join(__dirname, 'dist-student')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist-student', 'index.html'));
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));