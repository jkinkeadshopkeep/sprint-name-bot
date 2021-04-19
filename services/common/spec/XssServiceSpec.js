'use strict';
const expect = require('expect.js');
const xssService = require('../XssService');
const logger = require('../logger');

describe('XssService Unit Tests', function () {
  describe('testing DoXss', function () {
    const int = 1;
    const float = 2.5;
    const obj = { a: 2, b: 'some' };
    const compObj = { a: 2, b: "<script>alert('hello')</script>", c: { d: 'SELECT * FROM test AND 1 = 1' } };

    it('return int', function (done) {
      const res = xssService.DoXss(int);
      logger.log(res);
      expect(res).to.be.a('number');
      logger.log(typeof res);
      done();
    });

    it('return float', function (done) {
      const res = xssService.DoXss(float);
      logger.log(res);
      expect(res).to.be.a('number');
      logger.log(typeof res);
      done();
    });

    it('return obj', function (done) {
      const res = xssService.DoXss(obj);
      logger.log(res);
      expect(res).to.be.an('object');
      logger.log(typeof res);
      done();
    });

    it('return object with object value', function (done) {
      const res = xssService.DoXss(compObj);
      logger.log(res);
      expect(res).to.be.an('object');
      logger.log(typeof res);
      done();
    });
  });
});
