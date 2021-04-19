'use strict';
const request = require('supertest');
const app = require('../../bin/www');
const logger = require('../../services/common/logger');

describe('Unit Testing /slack', function () {
  describe('Send valid command to bot to return list of 5 bands beginning with B', function () {
    it('returns list of of random bands', function (done) {
      request(app)
        .post('/slack/createPoll')
        .set('Content-Type', 'application/json')
        .send({ channel_name: 'general', text: ' ' })
        .expect(200)
        .then((res) => {
          logger.log(res);
          done();
        });
    });

    it('returns list of 5 bands beginning with the letter B', function (done) {
      request(app)
        .post('/slack/createPoll')
        .set('Content-Type', 'application/json')
        .send({ channel_name: 'general', text: 'Bands B 5' })
        .expect(200)
        .then((res) => {
          logger.log(res);
          done();
        });
    });

    it('return empty list due to incorrect params', function (done) {
      request(app)
        .post('/slack/createPoll')
        .set('Content-Type', 'application/json')
        .send({ channel_name: 'general', text: 'Bands Basdad 5' })
        .expect(200)
        .then((res) => {
          logger.log(res);
          done();
        });
    });
  });
});
