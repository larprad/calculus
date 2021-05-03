// config
import {operandOptions} from '../Config';

export const getIconFromOperandValue = (value) => {
  return operandOptions.find(x => x.value === value).icon;
};

export const getRandomNumberBetween = (minVal, maxVal) => {
  return minVal + Math.floor(Math.random()*(maxVal - minVal + 1));
};