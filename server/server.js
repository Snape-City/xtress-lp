const express = require('express');
const app = express();
const path = require('path');
const PORT = 8080;

app.use(express.static(path.join(__dirname, '../public/')));

app.get('/', (req, res) => {
  res.sendStatus(200)
})

app.listen(PORT, console.log(`Listening on PORT ${PORT}`))