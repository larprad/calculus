// config
import {operandOptions, difficultyOptions} from '../Config';

export const getIconFromOperandValue = (value) => {
  return operandOptions.find(x => x.value === value).icon;
};

export const getRandomNumberBetween = (minVal, maxVal) => {
  return minVal + Math.floor(Math.random()*(maxVal - minVal + 1));
};

export const checkIfNumber = (number) => {
  return !isNaN(number);
};

export const getAnswersFromCalculus = (numberArray, operand, numberOfSolutions = 3, variation = 3) => {
  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  const resultArray = [];
  switch(operand) {
    case 1 :
      for(let i = 1; i < numberOfSolutions; i++) {
        const randomInt = Math.floor(Math.random()*variation*2) - variation;
        resultArray.push(numberArray[0] + numberArray[1] + randomInt);
      }; 
      resultArray.push(numberArray[0] + numberArray[1]);
      break;
    case 2 :
      for(let i = 1; i < numberOfSolutions; i++) {
        const randomInt = Math.floor(Math.random()*variation*2) - variation;
        resultArray.push(numberArray[0] - numberArray[1] + randomInt);
      }; 
      resultArray.push(numberArray[0] - numberArray[1]);
      break;
    case 3 : 
      for(let i = 1; i < numberOfSolutions; i++) {
        const randomInt = Math.floor(Math.random()*variation);
        resultArray.push(numberArray[0] * (numberArray[1] + randomInt));
      };
      resultArray.push(numberArray[0] * numberArray[1]);
      break;
    default: return [1,2,3];
  };
  shuffle(resultArray); 
  console.log(resultArray)
  return resultArray;
};

export const getDifficultyStringFromNumber = (number) => {
  return difficultyOptions.find(x => x.value === number).text; 
}
