'use strict';

function log (message) {
  message = formatMessage(message);
  console.log(`${new Date()} -------- ${formatMessage(message)}`);
}

function formatMessage (message) {
  return (typeof message === 'object') ? JSON.stringify(message) : message;
}

module.exports = {
  log: log
};
