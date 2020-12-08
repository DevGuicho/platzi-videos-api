const express = require('express');
const debug = require('debug')('app:server');
const app = express();
const cors = require('cors');

const { config } = require('./config');
const moviesApi = require('./routes/movies');
const {
  logErrors,
  errorHandler,
  wrapErrors,
} = require('./utils/middleware/errorhandler');

const notFounHandler = require('./utils/middleware/notFoundHandler');

app.use(express.json());
app.use(cors());
//Routes movies
moviesApi(app);

// Catch 404
app.use(notFounHandler);

//Errors Middlewares
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port, () => debug(`Server on port ${config.port}`));
