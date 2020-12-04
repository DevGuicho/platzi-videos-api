const express = require('express');
const app = express();

const { config } = require('./config');
const moviesApi = require('./routes/movies');

moviesApi(app);

app.listen(config.port, () => console.log(`Server on port ${config.port}`));
