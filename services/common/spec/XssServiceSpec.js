"use strict";
const expect = require("expect.js");
const xssService = require("../XssService");
const logger = require("../logger");

describe("XssService Unit Tests", function () {
    describe("testing DoXss", function () {
        let int = 1;
        let float = 2.5;
        let obj = {"a": 2, "b": "some"};
        let compObj = {"a": 2, "b": "<script>alert('hello')</script>", "c": {"d": "SELECT * FROM test AND 1 = 1"}};

        it("return int", function (done) {
            let res = xssService.DoXss(int);
            logger.log(res, "info");
            expect(res).to.be.a("number");
            logger.log(typeof res, "info");
            done();
        });

        it("return float", function (done) {
            let res = xssService.DoXss(float);
            logger.log(res, "info");
            expect(res).to.be.a("number");
            logger.log(typeof res, "info");
            done();
        });

        it("return obj", function (done) {
            let res = xssService.DoXss(obj);
            logger.log(res, "info");
            expect(res).to.be.an("object");
            logger.log(typeof res, "info");
            done();
        });

        it("return object with object value", function (done) {
            let res = xssService.DoXss(compObj);
            logger.log(res, "info");
            expect(res).to.be.an("object");
            logger.log(typeof res, "info");
            done();
        });
    });
});