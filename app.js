const app = require('./bin/www');
const logger = require('./services/common/logger');

const port = normalizePort(process.env.PORT || '3000');
app.listen(port, () => {
  logger.log(`HTTP listener on http://localhost:${port}`);
});
app.on('error', onError);

function normalizePort (val) {
  const port = parseInt(val, 10);
  if (isNaN(port)) return val;

  if (port >= 0) return port;

  return false;
}

function onError (error) {
  if (error.syscall !== 'listen') throw error;

  const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;

  switch (error.code) {
    case 'EACCES':
      // eslint-disable-next-line no-console
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      // eslint-disable-next-line no-console
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}
