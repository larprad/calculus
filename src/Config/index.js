const difficultyOptions = [
  {
    key: 'easy',
    text: 'easy',
    value: 1,
    icon: 'paw',
  },
  {
    key: 'normal',
    text: 'normal',
    value: 2,
    icon: 'hand peace',
  },
  {
    key: 'hard',
    text: 'hard',
    value: 3,
    icon: 'thumbs up'
  },
  {
    key: 'robot',
    text: 'robot',
    value: 4,
    icon: 'android',
  },
];

const operandOptions = [
  {
    key: 'addition',
    text: 'addition',
    value: 1,
    icon: 'add',
  },
  {
    key: 'subtraction',
    text: 'subtraction',
    value: 2,
    icon: 'minus',
  },
  {
    key: 'multiplication',
    text: 'multiplication',
    value: 3,
    icon: 'close',
  },
  {
    key: 'division',
    text: 'division',
    value: 4,
    icon: 'exclamation',
  },
];

const getMinMaxFromDifficulty = (difficultyNumber) => {
  switch (difficultyNumber) {
    case 1 : return [1, 5];
    case 2 : return [1, 9];
    case 3 : return [4, 19];
    case 4 : return [11, 99];
    default: return [1,9];
  }
}

export {operandOptions, difficultyOptions, getMinMaxFromDifficulty};