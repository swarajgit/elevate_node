'use restrict'

var chai = require('chai')
expect = chai.expect;
chai.should();

function isEven(num) {
    return num % 2 === 0;
}

function add(num1, num2) {
    return num1 + num2;
}
describe('Number operation test', function () {
    describe('isEven', function () {
        it('should return return true id num is even', function () {
            isEven(4).should.be.true;
        })

        it('should return false if num is odd', function () {
            expect(isEven(3)).to.be.false;
        })
    })

    describe('Add', function () {
        var num;
        beforeEach(function () {
            num = 5;
        })

        it("should be 10 when adding 5+5", function () {
            num = add(num, 5)
            num.should.equal(10);
        })

        //Skip any test for any reason, [it.skip === xit]. 
        //Same applies to describe as well. [describe.skip = xdescribe]
        // [describe.only] or [it.only] used to run specified test cases.
        it.skip("should be 12 when adding 5+7", function () {
            num = add(num, 7)
            num.should.equal(12);
        })
        xit("should be 12 when adding 5+7", function () {
            num = add(num, 7)
            num.should.equal(12);
        })
    })
})