// const app = require('../server/server');
// var request = require("supertest").agent(app);
const expect = require('chai').expect;


  describe('simple test', () => {
    it('1 = 1', done => {
        expect(1).to.eql(1);
         done();
       });
    // it('Redirects to "/"', done => {
    //   request.get('/').expect(200)
    //   .end((err, res) => {
    //     expect(res.statusCode).to.eql(200);
    //      done();
    //    });
    // });
  });

