class Poker {
  constructor(array) {
    this.array = array;
  }
  winningPair(originArray1, originArray2) {

    console.log('\n Before call the method :' + originArray1, originArray2);
    const callTotalScore1 = this.getTotalScore(originArray1);
    const firstUnique = callTotalScore1.uniquePair;
    const firstTotal = callTotalScore1.total;

    console.log('\n after first Array call the method :' + originArray1, originArray2);

    const callTotalScore2 = this.getTotalScore(originArray2);
    const secondUnique = callTotalScore2.uniquePair;
    const secondTotal = callTotalScore2.total;

    console.log('\n after second Array call the method :' + originArray1, originArray2);

    if (firstTotal === secondTotal) {
      return [];
    } else {
      const firstNewScore = Math.floor(firstTotal / firstUnique.length)
      const secondNewScore = Math.floor(secondTotal / secondUnique.length)

      if (firstNewScore > secondNewScore) {

        return originArray1;
      } else if (firstNewScore < secondNewScore) {

        return originArray2;
      }
    }
  }
  getTotalScore(convertArray) {
    const pokerRules = ['J', 'Q', 'K', 'A']

    let result = [...convertArray];

    const highestScore = 10;
    let sum = 0;
    const lastIndex = pokerRules.length - 1;
    console.log(result.length, pokerRules.length);
    for (let i = 0; i < result.length; i++) {
      sum = 0;
      for (let j = 0; j < pokerRules.length; j++) {
        if (convertArray[i] === pokerRules[j]) {
          if (j === lastIndex) {
            sum = highestScore + 11;
            result[i] = sum;
          } else {
            result[i] = highestScore;
          }

          console.log('result :' + result);
          console.log('convertArray :' + convertArray[i]);
        }
      }
    }
    const uniquePair = [...new Set(result)].map(Number);
    console.log('uniquePair :', uniquePair);
    let totalScore = uniquePair.reduce(function (sum, score) {
      return sum + score
    }, 0);
    if (totalScore > highestScore) {
      totalScore = totalScore - highestScore;
    }
    console.log('totalScore ' + totalScore);


    return { array: convertArray, total: totalScore, uniquePair: uniquePair }
  }
  winningPairFromArray(multipleArray) {


    let result = [];
    console.log(multipleArray.length);

    let uniqueLenght = 0;
    for (const iterator of multipleArray) {
      uniqueLenght = 0;
      const callTotalScore = Object.assign(this.getTotalScore(iterator));
      const uniqueValue = Object.assign(callTotalScore.uniquePair);
      console.log(uniqueValue);
      uniqueLenght = uniqueValue.length;
      console.log(uniqueLenght);
      const total = Object.assign(callTotalScore.total);
      const newTotal = Object.assign(Math.floor(total / uniqueLenght));

      result.push([total, newTotal]);

    }
    console.log('Result: ' + result + ' lenght ' + result.length);


    let finalResult = [];
    if(result.length === 2){
      if (result[0] === result[1]) {
        return [];
      } else {
        if (result[0][1] > result[1][1]) {
          finalResult.push(multipleArray[0]);
          
        } else if (result[0][1] < result[1][1]) {
          finalResult.push(multipleArray[1]);
        }
    }}
    if(result.length>2){
      let size = result.length - 2;
      console.log('size ' + size);
      for (let i = 0; i <= size; i++) {
        console.log('i ' + i);
        console.log('Result: ' + result[i]);
        console.log('00: ' + result[i][0]);
        console.log('01: ' + result[i + 1][0]);
        console.log('10: ' + result[i][1]);
        console.log('11: ' + result[i + 1][1]);
  
      if (result[i][1] >= result[i + 1][1]) {
          finalResult.push(multipleArray[i]);
        }
        console.log('finalResult :' + finalResult);
      }
      console.log('multipleArray' + multipleArray);
      console.log('finalResult :' + finalResult);
     
    }
    console.log('finalResult :'+finalResult);
    return finalResult
    }


}

const myPoker = new Poker()
//myPoker.winningPair(['A', 'A'], ['K', '3']);
//myPoker.winningPairFromArray([['K', 'K'], ['A', 'A']])
//myPoker.winningPairFromArray([['4', '3'], ['6', '6'], ['7', '7'], ['3', '3']])
//myPoker.winningPairFromArray([['4', '3'], ['6', '2'], ['7', '1'], ['3', '9']])

module.exports = Poker
