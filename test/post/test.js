'use strict';
var casual = require('casual');
var chai = require('chai');
var expect = chai.expect;
var should = chai.should();
require('dotenv').load();

describe('/Posts test suite', function () {

  var nameValue = casual.name;
  var newNameValue = casual.name;
  var descriptionValue = casual.description;
  var postIdValue = 0;

  describe('create test for post', function () {

    it('should create text post', function(done) {
      api.post('/api/Posts')
        .send({description: descriptionValue, name: nameValue})
        .expect(200)
        .end(function(err, res) {
          if (err){
            return done(err);
          }
          expect(res.body.name).to.equal(nameValue);
          postIdValue = res.body.id;
          done();
        });
    });

    it('should update post name ' + nameValue, function(done) {
      api.put('/api/Posts')
        .send({description: descriptionValue, name: newNameValue})
        .expect(200)
        .end(function(err, res) {
          if (err){
            return done(err);
          }
          expect(res.body.name).to.equal(newNameValue);
          done();
        });
    });

  });
});

