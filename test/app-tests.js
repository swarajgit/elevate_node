var chai = require('chai'),
    sinon = require('sinon')
    expect = chai.expect;
    chai.should();
let app = require('../app');
let chaiHttp = require('chai-http');
chai.use(chaiHttp);

describe('App', () =>{
    var reult;
    beforeEach(function(){
        result ='';
    });

    describe('getItem', function(){
        it('should return result array', function(done){
            chai.request(app).get('/getItems')
            .end(function(err, res){
                res.body.should.be.a('array');
                done();
            });
        });

        it('should return array of size 2', function(done){
            chai.request(app).get('/getItems')
            .end(function(err, res){
                res.body.length.should.be.eql(2);
                done();
            });
        });

        it('should should return status 200', function(done){
            chai.request(app).get('/getItems')
            .end(function(err, res){
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(2);
                done();
            });
        });
    });

    // after(function(){
    //     process.exit(0);
    // });
    
});

