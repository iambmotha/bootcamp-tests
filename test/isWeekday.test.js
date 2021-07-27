describe('IsWeekday' , function(){
    it('this is a weekday' , function(){
        assert.equal(isWeekday("Monday"), true);
    });

    it('this is not a weekday ' , function(){
        assert.equal(isWeekday("X 554"), false);
    });


});