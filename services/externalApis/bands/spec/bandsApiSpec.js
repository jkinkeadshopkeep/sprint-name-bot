'use strict';
const expect = require('expect.js');
const bandsApi = require('../bandsApi');

describe('bandsApi Unit Tests', function () {
  describe('Should return a list of bands', function () {
    it('5 random bands should be returned', function (done) {
      bandsApi.getBandLists([]).then(function (result) {
        expect(result).to.have.length(5);
        done();
      }).catch(function (err) {
        done(err);
      });
    });

    it('10 bands beginning with letter T should be returned', function (done) {
      bandsApi.getBandLists(['Bands', 't', 10]).then(function (result) {
        expect(result).to.have.length(10);
        done();
      }).catch(function (err) {
        done(err);
      });
    });

    it('10 bands beginning with letter B should be returned when list amount greater than 10 is passed', function (done) {
      bandsApi.getBandLists(['Bands', 'b', 20]).then(function (result) {
        expect(result).to.have.length(10);
        done();
      }).catch(function (err) {
        done(err);
      });
    });

    it('10 bands beginning with letter T should be returned', function (done) {
      bandsApi.getBandLists(['Bands', 't', 10]).then(function (result) {
        expect(result).to.have.length(10);
        done();
      }).catch(function (err) {
        done(err);
      });
    });

    it('3 bands beginning with letter E should be returned', function (done) {
      bandsApi.getBandLists(['Bands', 'e', 3]).then(function (result) {
        expect(result).to.have.length(3);
        done();
      }).catch(function (err) {
        done(err);
      });
    });

    it('Should return empty array response for invalid params', function (done) {
      bandsApi.getBandLists(['Bands', 'eeeeee', 3]).then(function (result) {
        expect(result).to.have.length(0);
        done();
      }).catch(function (err) {
        done(err);
      });
    });
  });
});
