describe('this test' , function(){
    it('should show you how to use MochaJS' , function(){
        assert.equal(1,1);
    });

});

describe('Greet someone' , function(){
    it('should return Hello, Thandoxolo' , function(){
        assert.equal(greet("Thandoxolo"), 'Hello, Thandoxolo');
    });

    it('should return Hello, Sino' , function(){
        assert.equal(greet("Sino"), 'Hello, Sino');
    });

    it('if no name entered,should return Hello' , function(){
        assert.equal(greet(), 'Hello');
    });

    it('should return Hello, 12345' , function(){
        assert.equal(greet(12345), 'Hello, 12345');
    });

});