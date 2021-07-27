describe('allPaarl' , function(){
    it('should return ' , function(){
        assert.equal(2, regNumbersForPaarl.length, 'There are 2 Paarl reg numbers.');
        assert.equal('CJ 678 543', regNumbersForPaarl[0]);
        assert.equal('CJ 67890', regNumbersForPaarl[1]);

    });


}); 