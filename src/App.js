// libs
import {useState, useEffect} from 'react';

// components
import Header from './Component/Header';
import Main from './Component/Main';
import Settings from './Component/Settings';

// config
import {
  operandOptions, 
  difficultyOptions,
  getMinMaxFromDifficulty,
  timerConfig,
} from './Config';

// styles
import './App.css';
import { 
  getRandomNumberBetween,
  getAnswersFromCalculus,
} from './Utils';

function App() {
  // global state
  const [operation, setOperation] = useState(1);
  const [numberArray, setNumberArray] = useState([0,0])
  const [difficulty, setDifficulty] = useState(2);
  const [results, setResults] = useState([]);
  const [streakCount, setStreakCount] = useState(0);
  const [timer, setTimer] = useState(timerConfig.maxValue);
  const [status, setStatus] = useState(false);

  useEffect(() => {
    if (!timer || !status) return;
    const intervalId = setInterval(() => {
      setTimer(Math.floor((timer - 0.1)*10)/10);
    }, 100);
    return () => clearInterval(intervalId);
  }, [timer, status]);

  useEffect(() => {if(timer === 0) {
    setStreakCount(0)} 
  }, [timer])

  // functions
  const resetNumbers = () => {
    const minMaxArray = getMinMaxFromDifficulty(difficulty);
    const numberOne = getRandomNumberBetween(minMaxArray[0],minMaxArray[1]);
    const numberTwo = getRandomNumberBetween(minMaxArray[0],minMaxArray[1]);
    setNumberArray([numberOne, numberTwo]);
    setTimer(5);
    generateResults([numberOne, numberTwo]);
  }

  const checkResult = (res) => {
    let trueResult;
    switch(operation) {
      case 1 : trueResult = numberArray[0] + numberArray[1]; break
      case 2 : trueResult = numberArray[0] - numberArray[1]; break
      case 3 : trueResult = numberArray[0] * numberArray[1]; break
      default: return '?'
    };
    if(trueResult === parseInt(res, 10)) {
      return true;
    } else {
      return false;
    }
  }

  const submitResult = (res) => {
    const success = checkResult(res);
    console.log('submit res', success)
    if(success) {
      resetNumbers();
      setStreakCount(streakCount + 1);
    } else {
      setStreakCount(0);
    }
  }

  const generateResults = (numberArray) => {
    const resultArray = getAnswersFromCalculus(numberArray, operation);
    setResults(resultArray);
  }

  //handling game
  const start = () => {
    resetNumbers();
    setStatus(true);
  };

  const stop = () => {
    resetNumbers();
    setStatus(false);
    setStreakCount(0);
  }

  return (
    <div className="App">
      <Header />
      <Settings 
        operation={operation}
        setOperation={setOperation}
        difficulty={difficulty}
        setDifficulty={setDifficulty} 
        operandOptions={operandOptions}
        difficultyOptions={difficultyOptions}
        status={status}
        streakCount={streakCount}
        timer={timer}
      />
      <Main 
        operation={operation}
        results={results}
        numberArray={numberArray}
        submitResult={submitResult}
        status={status}
        start={start}
        stop={stop}
        timer={timer}
        timerMax = {timerConfig.maxValue}
      />
    </div>
  )
}

export default App;
