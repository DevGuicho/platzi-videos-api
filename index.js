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
const userMoviesApi = require('./routes/userMovies');
const authApi = require('./routes/auth');

app.use(express.json());
//PERIMITIR PETICIONES DE UN DOMINIO EN ESPECIFICO
/* const corsOptions = { origin: 'http://example.com' };
app.use(cors(corsOptions)); */
app.use(cors());

//Routes movies
authApi(app);
//Routes movies
moviesApi(app);
//Routes user movies
userMoviesApi(app);

// Catch 404
app.use(notFounHandler);

//Errors Middlewares
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port, () => debug(`Server on port ${config.port}`));
