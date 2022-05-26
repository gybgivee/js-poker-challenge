class Poker {
  constructor(array) {
    this.array = array
  }
  winningPair(originArray1, originArray2) {
    let multipleArray = [originArray1, originArray2]
    let result = this.getFinalResult(multipleArray)

    let finalResult = this.getConditionalResult(result, multipleArray)
    console.log('Result: ' + result + ' lenght ' + result.length)

    console.log('finalResult :' + finalResult)
    return finalResult
  }
  winningPairFromArray(multipleArray) {
    let result = this.getFinalResult(multipleArray)
    let finalResult = this.getConditionalResult(result, multipleArray)
    console.log('Result: ' + result + ' lenght ' + result.length)
    console.log('finalResult :' + finalResult)
    return finalResult
  }
  winning3CardHand(multipleArray) {
    let result = this.getFinalResult(multipleArray)
    let finalResult = this.getConditionalResult(result, multipleArray);
    console.log('finalResult :' + finalResult);
    let modifiedResult = [];
    let sizeResult = finalResult[0].length;
    for (let i = 0; i < finalResult.length; i++) {
      if (sizeResult < finalResult[i].length) {
        console.log('Hello Am here');
        sizeResult = finalResult[i].length;
        modifiedResult.push(finalResult[i]);

      }
    }
    if (modifiedResult.length === 0) {

      return finalResult;
    }
    console.log(modifiedResult);
    return modifiedResult;
  }
  getTotalScore(convertArray) {
    const pokerRules = ['J', 'Q', 'K', 'A']

    let result = [...convertArray]

    const highestScore = 10;
    let sum = 0;
    const lastIndex = pokerRules.length - 1
    console.log(result.length, pokerRules.length)
    for (let i = 0; i < result.length; i++) {
      sum = 0
      for (let j = 0; j < pokerRules.length; j++) {
        if (convertArray[i] === pokerRules[j]) {
          if (j === lastIndex) {
            sum = highestScore + 11
            result[i] = sum
          } else {
            result[i] = highestScore
          }

          console.log('result :' + result)
          console.log('convertArray :' + convertArray[i])
        }
      }
    }
    const uniquePair = [...new Set(result)].map(Number)
    console.log('uniquePair :', uniquePair)
    let totalScore = uniquePair.reduce(function (sum, score) {
      return sum + score
    }, 0)
    if (totalScore > highestScore) {
      totalScore = totalScore - highestScore
    }
    console.log('totalScore ' + totalScore)

    return { array: convertArray, total: totalScore, uniquePair: uniquePair }
  }

  getFinalResult(multipleArray) {
    let result = []

    let uniqueLenght = 0
    for (const iterator of multipleArray) {
      uniqueLenght = 0
      const callTotalScore = Object.assign(this.getTotalScore(iterator))
      const uniqueValue = Object.assign(callTotalScore.uniquePair)
      console.log(uniqueValue)
      uniqueLenght = uniqueValue.length
      console.log(uniqueLenght)
      const total = Object.assign(callTotalScore.total)
      const newTotal = Object.assign(Math.floor(total / uniqueLenght))

      result.push([total, newTotal])
      console.log(result)
    }
    return result
  }
  getConditionalResult(result, multipleArray) {
    console.log('result' + result)
    let finalResult = []

    if (result.length===2) {
      if (parseInt(result[0][0]) === parseInt(result[1][0])) {
        finalResult.push([])
      } else {

        if (result[0][1] > result[1][1]) {

          finalResult.push(multipleArray[0])

        } else if (result[0][1] < result[1][1]) {

          finalResult.push(multipleArray[1])
        }
      }
    }
    if (result.length> 2) {

      let size = result.length - 2;
      if(size===1){
        size=size-1;
      }

      for (let i = 0; i <= size; i++) {
        if (result[i][1] >= result[i + 1][1]) {
          finalResult.push(multipleArray[i])
        }
        console.log('finalResult :' + finalResult)
      }
      console.log('multipleArray' + multipleArray)
      console.log('finalResult :' + finalResult)
    }
    console.log(finalResult)
    return finalResult
  }
}

const myPoker = new Poker()
//myPoker.winningPair(['A', 'A'], ['K', '3']);
//myPoker.winningPair(['J', 'Q'], ['3', '7']);
//myPoker.winningPair(['9', '9'], ['7', '7']);
//myPoker.winningPairFromArray([['K', 'K'], ['A', 'A']])
//myPoker.winningPairFromArray([['4', '3'], ['6', '6'], ['7', '7'], ['3', '3']])
//myPoker.winningPairFromArray([['4', '3'], ['6', '2'], ['7', '1'], ['3', '9']])
//myPoker.winning3CardHand([['5', '5', '3'], ['7', '7', '7']])
myPoker.winning3CardHand([['5', '5', '3'], ['A', 'A'], ['7', '7', '7'], ['Q', 'J', '9']]);
//myPoker.winning3CardHand([['Q', 'Q'], ['9', '9']])
//myPoker.winning3CardHand([['J', 'J'], ['9', '9'], ['6', '6', '4']])
module.exports = Poker
