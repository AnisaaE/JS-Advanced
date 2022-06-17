const lookupChar= require('./index.js')
const {assert}= require('chai')

describe ('lookupChar test', ()=>{
    it('is first param string', ()=>{
        assert.equal(lookupChar([],9),undefined)
    });
    it('is first param string', ()=>{
        assert.equal(lookupChar({},9),undefined)
    });
    it('is first param string', ()=>{
        assert.equal(lookupChar(3,9),undefined)
    });
    it('is second param number', ()=>{
        assert.equal(lookupChar('das','sad'),undefined)
    });
    it('is second param number', ()=>{
        assert.equal(lookupChar('das',[]),undefined)
    });
    it('is second param number', ()=>{
        assert.equal(lookupChar('dsa',{}),undefined)
    });
    it('is index correct', ()=>{
        assert.equal(lookupChar("das",6),"Incorrect index")
    });
    it('is index correct', ()=>{
        assert.equal(lookupChar("das",3),"Incorrect index")
    });
    it('is index correct', ()=>{
        assert.equal(lookupChar("das",-6),"Incorrect index")
    });
    it('is index correct', ()=>{
        assert.equal(lookupChar("das",2),"s")
    });
    it('is index correct', ()=>
    assert.equal(lookupChar('fds',2.1)),undefined)
})