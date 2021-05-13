// componants
import Number from '../Number';
import Operand from '../Operand';
import Result from '../Result';
import Control from '../Control';
import Loader from '../Loader';

// styles
import './main.css';

const Main = ({timerMax, operation, results, timer, submitResult, numberArray, status, start, stop}) => {
  return (
    <div className="main">
      <div className="main-operation">
        <Loader timer={timer} init={timerMax}/>
        <Number number={numberArray[0]} status={status}/>
        <Operand operand={operation}/>
        <Number number={numberArray[1]} status={status}/>
      </div>
      <Result results={results} status={status} submitResult={submitResult}/>
      <Control start={start} stop={stop} status={status}/>
    </div>
  )
};

export default Main;
