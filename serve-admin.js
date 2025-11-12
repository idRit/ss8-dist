const path = require('path');
const express = require('express');
const app = express();
const PORT = 5001;

app.use(express.static(path.join(__dirname, 'dist-admin')));

app.get('/*splat', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist-admin', 'index.html'));
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));