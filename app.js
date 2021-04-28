const localtunnel = require('localtunnel');

const app = require('./bin/www');
const logger = require('./services/common/logger');

const port = normalizePort(process.env.PORT || '3000');
app.listen(port, () => {
  logger.log(`HTTP listener on http://localhost:${port}`);
});
app.on('error', onError);

(async () => {
  const tunnel = await localtunnel({ port: 3000, subdomain: 'sprintnamebot' });

  logger.log(`Localtunnel URL: ${tunnel.url}`);
  tunnel.url;

  tunnel.on('close', () => {
    logger.log('Local tunnel closed.');
  });
})();

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
