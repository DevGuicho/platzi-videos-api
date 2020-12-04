const express = require('express');
const app = express();

const { config } = require('./config');

app.get('/', (req, res) => {
  res.json({
    hello: 'word',
  });
});

app.listen(config.port, () => console.log(`Server on port ${config.port}`));
