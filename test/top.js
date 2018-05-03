"use strict";
var app, supertest, expect;
function importTest(name, path) {
  describe(name, function () {
    require(path);
  });
};
describe("My Test Suite", function () {
  before(function () {
    //console.log("running something before each test");
    app  = require("../server/server");
    supertest = require("supertest");
    global.api = supertest(app);
    expect = require("expect");
  });
  beforeEach(function () {
    //console.log("running something before each test");
  });

  importTest("Posts", "./post/test");  // For Posts
  //importTest("Comments", "./comment/test");  // For Comments

  after(function () {
    console.log("after all tests");
  });
});
