// libs
import {useState} from 'react';

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
  const [operation, setOperation] = useState(2);
  const [numberArray, setNumberArray] = useState([0,0])
  const [difficulty, setDifficulty] = useState(2);
  const [result, setResult]= useState('');

  // functions
  const resetNumbers = () => {
    const minMaxArray = getMinMaxFromDifficulty(difficulty);
    const numberOne = getRandomNumberBetween(minMaxArray[0],minMaxArray[1]);
    const numberTwo = getRandomNumberBetween(minMaxArray[0],minMaxArray[1]);
    setNumberArray([numberOne, numberTwo]);
  }

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
      />
      <Calcul operation={operation} result={result} setResult={setResult} numberArray={numberArray}/>
      <Control resetNumbers={resetNumbers}/>
    </div>
  );
}

export default App;
