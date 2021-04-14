'use strict';
const xss = require('xss');
const logger = require('./logger');

function doXss (input) {
  if (input === undefined) {
    logger.log('Xss failed', 'error');
  }
  const jsonInput = JSON.stringify(input);
  const xssOutput = xss(jsonInput);
  return JSON.parse(xssOutput);
}

module.exports = {
  DoXss: doXss
};
