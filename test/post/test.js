"use strict";
var casual = require("casual");
var chai = require("chai");
var expect = chai.expect;
var should = chai.should();
require("dotenv").load();

describe("/Posts test suite", function () {

  var postId='58da89bcdcb31127808228b0';
  describe("create text for test user", function () {
    var postTitle = casual.title;
    var tmpPostId;
    it("should create text post", function(done) {
      api.post("/api/Posts")
        .send({postTitle: postTitle, postContent: casual.description})
        .query({access_token: token})
        .expect(200)
        .end(function(err, res) {
          if (err){
            return done(err);
          }
          tmpPostId = res.body.id;
          expect(res.body.postTitle).to.equal(postTitle);
          done();
        });
    });

    it("should update "+ postTitle +"text post", function(done) {
      var postContent=casual.description;
      api.put("/api/Posts/"+ tmpPostId)
        .send({postContent: postContent})
        .query({access_token: token})
        .expect(200)
        .end(function(err, res) {
          if (err){
            return done(err);
          }
          expect(res.body.postContent).to.equal(postContent);
          done();
        });
    });

    it("should delete text post", function(done) {
      api.delete("/api/Posts/" + tmpPostId)
        .query({access_token: token})
        .expect(200)
        .end(function(err, res) {
          if (err){
            return done(err);
          }
          expect(res.body.count).to.equal(1);
          done();
        });
    });
  });
  describe("create photo for test user", function () {
    var postTitle = casual.title;
    var tmpPhotoId="58e5cc29039b982297ae1424"; //58cf78b08a345b477a1298b5
    var tmpPostId;
    it("should create photo post", function(done) {
      api.post("/api/Posts")
        .send({postTitle: postTitle, postContent: casual.description, _photos:tmpPhotoId})
        .query({access_token: token})
        .expect(200)
        .end(function(err, res) {
          if (err){
            return done(err);
          }
          tmpPostId = res.body.id;
          expect(res.body._photos).to.equal(tmpPhotoId);
          done();
        });
    });

    it("should update "+ postTitle +"photo post", function(done) {
      var postContent=casual.description;
      api.put("/api/Posts/"+ tmpPostId)
        .send({postContent: postContent})
        .query({access_token: token})
        .expect(200)
        .end(function(err, res) {
          if (err){
            return done(err);
          }
          expect(res.body.postContent).to.equal(postContent);
          done();
        });
    });

    it("should delete photo post", function(done) {
      api.delete("/api/Posts/" + tmpPostId)
        .query({access_token: token})
        .expect(200)
        .end(function(err, res) {
          if (err){
            return done(err);
          }
          expect(res.body.count).to.equal(1);
          done();
        });
    });
  });
  describe("create video for test user", function () {
    var postTitle = casual.title;
    var tmpVideoId="58e5cc1afaf1e1223c4c788a"; //58cf78b08a345b477a1298b5
    var tmpPostId;
    it("should create video post", function(done) {
      api.post("/api/Posts")
        .send({postTitle: postTitle, postContent: casual.description, _videos:tmpVideoId})
        .query({access_token: token})
        .expect(200)
        .end(function(err, res) {
          if (err){
            return done(err);
          }
          tmpPostId = res.body.id;
          expect(res.body._videos).to.equal(tmpVideoId);
          done();
        });
    });

    it("should update "+ postTitle +"video post", function(done) {
      var postContent=casual.description;
      api.put("/api/Posts/"+ tmpPostId)
        .send({postContent: postContent})
        .query({access_token: token})
        .expect(200)
        .end(function(err, res) {
          if (err){
            return done(err);
          }
          expect(res.body.postContent).to.equal(postContent);
          done();
        });
    });

    it("should delete video post", function(done) {
      api.delete("/api/Posts/" + tmpPostId)
        .query({access_token: token})
        .expect(200)
        .end(function(err, res) {
          if (err){
            return done(err);
          }
          expect(res.body.count).to.equal(1);
          done();
        });
    });
  });
  describe("Get post likes", function () {
    it("should Get post likes", function(done) {
      api.get("/api/Posts/"+postId+"/like")
        .query({access_token: token})
        .expect(200)
        .end(function(err, res){
          if (err){
            return done(err);
          }
          res.body.should.be.a("array");
          expect(res.body).to.have.length.above(0);
          done();
        });
    });
  });
  describe("Get post number of likes", function () {
    it("should Get post number of likes", function(done) {
      api.get("/api/Posts/"+postId+"/numberOfLike")
        .query({access_token: token})
        .expect(200)
        .end(function(err, res){
          if (err){
            return done(err);
          }
          res.body.should.be.a("array");
          expect(res.body).to.have.length.above(0);
          done();
        });
    });
  });

  describe("Get post comments", function () {
    it("should Get post comments", function(done) {
      api.get("/api/Posts/"+postId+"/comments")
        .query({access_token: token})
        .expect(200)
        .end(function(err, res){
          if (err){
            return done(err);
          }
          res.body.should.be.a("array");
          expect(res.body).to.have.length.above(0);
          done();
        });
    });
  });
  var communityId = "58d92f40bcdb8b2bdc454794";
  describe("Get post of a community", function () {
    it("should Get post of a community", function(done) {
      api.get("/api/Posts/"+communityId+"/community")
        .query({access_token: token})
        .expect(200)
        .end(function(err, res){
          if (err){
            return done(err);
          }
          res.body.should.be.a("array");
          expect(res.body).to.have.length.above(0);
          done();
        });
    });
  });

  describe("Get posts of all friends or followers", function () {
    it("should Get posts of all friends or followers", function(done) {
      api.get("/api/Posts/me")
        .query({access_token: token})
        .expect(200)
        .end(function(err, res){
          if (err){
            return done(err);
          }
          res.body.should.be.a("array");
          expect(res.body).to.have.length.above(0);
          done();
        });
    });
  });
});
