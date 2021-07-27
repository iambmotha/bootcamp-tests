describe('Bellville' , function(){
    it('This plate is from Bellville' , function(){
        assert.equal(isFromBellville("CY 554"), true);
    });

    it('This plate is not from Bellville' , function(){
        assert.equal(isFromBellville("CX 554"), false);
    });

    it('This plate is from Bellville' , function(){
        assert.equal(isFromBellville("CY 123"), true);
    });

});   

