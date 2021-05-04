// libs
import {useState, useEffect} from 'react';

// components
import Header from './Component/Header';
import Toolbar from './Component/Toolbar';
import Calcul from './Component/Calcul';
import Control from './Component/Control';

// config
import {operandOptions, difficultyOptions, getMinMaxFromDifficulty} from './Config';

// styles
import './App.css';
import { getRandomNumberBetween } from './Utils';

function App() {
  // global state
  const [operation, setOperation] = useState(1);
  const [numberArray, setNumberArray] = useState([0,0])
  const [difficulty, setDifficulty] = useState(2);
  const [result, setResult] = useState('');
  const [streakCount, setStreakCount] = useState(0);
  const [timer, setTimer] = useState(10);
  const [status, setStatus] = useState(false);

  useEffect(() => {
    if (!timer || !status) return;
    const intervalId = setInterval(() => {
      setTimer(timer - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [timer, status]);

  useEffect(() => {if(timer === 0) setStreakCount(0) }, [timer])

  // functions
  const resetNumbers = () => {
    const minMaxArray = getMinMaxFromDifficulty(difficulty);
    const numberOne = getRandomNumberBetween(minMaxArray[0],minMaxArray[1]);
    const numberTwo = getRandomNumberBetween(minMaxArray[0],minMaxArray[1]);
    setNumberArray([numberOne, numberTwo]);
    setTimer(10);
    setResult('');
  }

  const stop = () => {
    resetNumbers();
    setStatus(false);
    setStreakCount(0);
  }

  const checkResult = () => {
    let trueResult;
    switch(operation) {
      case 1 : trueResult = numberArray[0] + numberArray[1]; break
      case 2 : trueResult = numberArray[0] - numberArray[1]; break
      case 3 : trueResult = numberArray[0] * numberArray[1]; break
      case 4 : trueResult = numberArray[0] / numberArray[1]; break
      default: return '?'
    };
    if(trueResult === parseInt(result, 10)) {
      return true;
    } else {
      return false;
    }
  }

  const submitResult = () => {
    const success = checkResult();
    if(success) {
      resetNumbers();
      setStreakCount(streakCount + 1);
    } else {
      setStreakCount(0);
    }
  }

  const start = () => {
    resetNumbers();
    setStatus(true);
  };

  // jsx
  return (
    <div className="App">
      <Header />
      <Toolbar 
        operation={operation}
        setOperation={setOperation}
        difficulty={difficulty}
        setDifficulty={setDifficulty} 
        operandOptions={operandOptions}
        difficultyOptions={difficultyOptions}
        status={status}
      />
      <Calcul
        operation={operation}
        result={result}
        setResult={setResult}
        numberArray={numberArray}
        submitResult={submitResult}
        status={status}
      />
      <Control
        streakCount={streakCount}
        timer={timer}
        start={start}
        status={status}
        stop={stop}
      />
    </div>
  );
}

export default App;
