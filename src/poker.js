class Poker {
  constructor(array){
    this.array = array;
  }
  winningPair(originArray1,originArray2) {
 
    console.log('\n Before call the method :'+originArray1,originArray2);
    const callTotalScore1 = this.getTotalScore(originArray1);
    const firstUnique = callTotalScore1.uniquePair;
    const firstTotal = callTotalScore1.total;
    
    console.log('\n after first Array call the method :'+originArray1,originArray2);
    
    const callTotalScore2 = this.getTotalScore(originArray2);
    const secondUnique = callTotalScore2.uniquePair;
    const secondTotal = callTotalScore2.total;

    console.log('\n after second Array call the method :'+originArray1,originArray2);
  
    if (firstTotal === secondTotal) {
      return [];
    } else {
      const firstNewScore = Math.floor(firstTotal / firstUnique)
      const secondNewScore = Math.floor(secondTotal / secondUnique)
      
      if (firstNewScore > secondNewScore) {
        
        return originArray1;
      } else if (firstNewScore < secondNewScore) {

        return originArray2;
      }
    }
  }
  getTotalScore(convertArray) {
    const pokerRules = ['A', 'J', 'K', 'Q']
        
  let result = [...convertArray];
  
    const highestScore = 10;
    
    for (let i = 0; i < convertArray.length; i++) {
      
      for (let j = 0; j < pokerRules.length; j++) {
        if (convertArray[i] === pokerRules[j]) {
          result[i]=highestScore;
          console.log('convertArray :'+convertArray[i],'result :'+result[i]);
        }
      }
    }
    const uniquePair = [...new Set(result)].map(Number);
    console.log('uniquePair :',uniquePair);
    const totalScore = uniquePair.reduce(function (sum, score) {
      return sum + score
    }, 0);
    console.log('totalScore '+totalScore);
    const uniquePairLength = uniquePair.length;

    return { array:convertArray,total: totalScore, uniquePair: uniquePairLength }
  }
  winningPairFromArray(multipleArray){

    let callTotalScore,uniqueValue,total,newTotal;
    let result=[];
    console.log(multipleArray.length);

    
    for(let i=0; i<multipleArray.length; i++){
     
      callTotalScore = this.getTotalScore(multipleArray[i]);
      uniqueValue = callTotalScore.uniquePair;
      total = callTotalScore.total;
      newTotal = Math.floor(total / uniqueValue.length);
      
      result.push(total,newTotal);
     
    }
    console.log('Result: ' + result);
   
    
  }
 
}
const myPoker = new Poker()
//myPoker.winningPair(['A', 'A'], ['K', '3']);
myPoker.winningPairFromArray([['4', '3'], ['6', '6'], ['7', '7'], ['3', '3']])
module.exports = Poker
