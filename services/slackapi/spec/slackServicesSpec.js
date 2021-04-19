'use strict';
require('dotenv').config();
const expect = require('expect.js');
const slackService = require('../slackService');

describe('slackService Unit Tests', function () {
  describe('Should return a list of bands', function () {
    it('5 random bands should be returned', function (done) {
      slackService.createAndPostSprintNames({ channel_name: 'general', text: '' }).then(function (result) {
        expect(result.ok).to.be(true);
        done();
      }).catch(function (err) {
        done(err);
      });
    });

    it('10 bands beginning with letter T should be returned', function (done) {
      slackService.createAndPostSprintNames({ channel_name: 'general', text: 'bands t 10' }).then(function (result) {
        expect(result.ok).to.be(true);
        done();
      }).catch(function (err) {
        done(err);
      });
    });

    it('Should return string message for invalid params', function (done) {
      slackService.createAndPostSprintNames({ channel_name: 'general', text: 'bands teeeee 10' }).then(function (result) {
        expect(result.ok).to.be(true);
        expect(result.message.text).to.be('A list could not be generated with the parameters passed :skull:');
        done();
      }).catch(function (err) {
        done(err);
      });
    });

    it('Should return superhero list string', function (done) {
      slackService.createAndPostSprintNames({ channel_name: 'general', text: 'superheros b 3' }).then(function (result) {
        expect(result.ok).to.be(true);
        expect(result.message.text).to.be('Superhero list');
        done();
      }).catch(function (err) {
        done(err);
      });
    });
  });
});
