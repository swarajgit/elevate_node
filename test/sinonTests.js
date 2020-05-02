var chai = require('chai'),
sinon = require('sinon')
expect = chai.expect;
chai.should();

describe('sinon test',function(){
    var student;
    
    beforeEach(function(){
        student = {
            dropClass: function(classId,cb){
                cb();
            }
        }
    })

    describe('student.dropclass', function(){
        it('should call the callback cb() function', function(){
            var spy = sinon.spy();
            student.dropClass(1,spy);
            spy.called.should.be.true;
        })
    })
})