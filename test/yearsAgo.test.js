describe('yearsAgo' , function(){
    it('should return 45 years ago' , function(){
        assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976));
    });

    it('should return 21 years ago' , function(){
        assert.equal((new Date().getFullYear() - 2000), yearsAgo(2000));
    });

}); 