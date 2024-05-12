const express = require('express');
const app = express();
const PORT = 3000;

require('./db');

app.use('/', (req, res) => {
  // res.send('Hola mundo');
  res.send('Aprendiendo docker');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT} --> http://localhost:${PORT}`);
});
