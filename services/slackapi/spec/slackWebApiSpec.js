'use strict';
require('dotenv').config();
const expect = require('expect.js');
const slackWebApi = require('../slackWebApi');

describe('slackWebApi Unit Tests', function () {
  describe('should post message', function () {
    it('message should be successfully posted', function (done) {
      slackWebApi.postMessage({ channel: 'general', text: 'Test' }).then(function (result) {
        expect(result.ok).to.be(true);
        done();
      }).catch(function (err) {
        done(err);
      });
    });

    it('message should post message unsuccessfully', function (done) {
      slackWebApi.postMessage({}).catch(function (err) {
        expect(err.message).to.be('An API error occurred: invalid_arguments');
        done();
      });
    });
  });
});
