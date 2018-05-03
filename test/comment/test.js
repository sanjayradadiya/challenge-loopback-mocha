'use strict';
var casual = require('casual');
var chai = require('chai');
var expect = chai.expect;
require('dotenv').load();

describe('/comments test suite', function () {

  var nameValue = casual.name;
  var descriptionValue = casual.description;
  var commentIdValue = 0 ;
  var commentValue = casual.description;
  var postIdValue = 0;

  describe('create test for comments to post', function () {
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
          describe('create text for test comments', function(){

            it('should create comments', function(done) {
              api.post('/api/Posts/' + postIdValue + '/comments')
                .send({comment: commentValue, postId: postIdValue})
                .expect(200)
                .end(function(err, res) {
                  if (err){
                    return done(err);
                  }
                  expect(res.body.postId).to.equal(postIdValue);
                  commentIdValue = res.body.id;
                  done();
                });
            });

            it('should create comments', function(done) {
              api.post('/api/Posts/' + postIdValue + '/comments')
                .send({comment: commentValue, postId: postIdValue})
                .expect(200)
                .end(function(err, res) {
                  if (err){
                    return done(err);
                  }
                  expect(res.body.postId).to.equal(postIdValue);
                  commentIdValue = res.body.id;
                  done();
                });
            });

            it('should get multiple comment for post', function(done) {
              api.get('/api/Posts/' + postIdValue + '/comments')
                .expect(200)
                .end(function(err, res) {
                  if (err){
                    return done(err);
                  }
                  expect(res.body).to.have.length.above(1);
                  done();
                });
            });

            it('should update comments put', function(done) {
              api.put('/api/Posts/' + postIdValue + '/comments/' + commentIdValue)
                .send({comment: commentValue, postId: postIdValue, id: commentIdValue})
                .expect(200)
                .end(function(err, res) {
                  if (err){
                    return done(err);
                  }
                  expect(res.body.id).to.equal(commentIdValue);
                  done();
                });
            });

          });
        });
    });
  });
});

