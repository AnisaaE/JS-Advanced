const isOddOrEven= require('./index.js')
const {assert}= require('chai')

describe('isOddOrEven test',()=>{
    it("is input an array",()=>{
        assert.equal(isOddOrEven([]),undefined)
    });
    it("is input an object",()=>{
        assert.equal(isOddOrEven({}),undefined)
    });
    it("is input a number",()=>{
        assert.equal(isOddOrEven(3),undefined)
    });
     it("is input odd",()=>{
        assert.equal(isOddOrEven('house'),'odd')
    });
    it("is input even",()=>{
        assert.equal(isOddOrEven('bike'),'even')
    })
})