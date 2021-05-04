// components
import {Icon} from "semantic-ui-react"

// utils
import {getIconFromOperandValue} from '../../Utils';

// styles
import "./calcul.css"

const Calcul = ({operation, setResult, result, numberArray, submitResult, status}) => {
  const iconName = getIconFromOperandValue(operation);
  const handleResultChange = (e) => {
    setResult(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit');
    submitResult();
  }
  return (
    <div className="calcul">
      <div className="calcul-number">
        <h2>
          {status ? numberArray[0] : 'X'}
        </h2>
      </div>
      <Icon size="huge" name={iconName} color='violet'/>
      <div className="calcul-number">
        <h2>
          {status ? numberArray[1] : 'X'}
        </h2>
      </div>
      <Icon size="huge" name='arrow alternate circle right outline' color='violet' />
      <form onSubmit={handleSubmit}>
        <input className="calcul-number result" value={result} onChange={handleResultChange} disabled={!status}></input>
      </form>
    </div>
  )
};

export default Calcul;
