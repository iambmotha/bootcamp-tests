function allPaarl(regNumber){
    var regNumbersForPaarl = []
    var plates = regNumbers.split(',')
    
    for (var j=0;j<plates.length;j++){
        if (plates[j].includes('CJ')){
        var currentPlates = plates[j].trim()
            regNumbersForPaarl.push(currentPlates)}
       
    } 	  
    return regNumbersForPaarl
  }