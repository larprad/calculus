// components
import { Dropdown } from 'semantic-ui-react';

// styles
import './toolbar.css';

const Toolbar = ({
  operandOptions,
  difficultyOptions,
  operation,
  difficulty,
  setOperation,
  setDifficulty,
  status,
}) => {
  const handleOperandChange = (e, {value}) => {
    setOperation(value);
  };
  const handleDifficultyChange = (e, {value}) => {
    setDifficulty(value);
  };

  return (
    <div className="toolbar">
      <div className="toolbar-container">
        <div className="toolbar-info">
          <h3 className="toolbar-label">Operation</h3>
          <Dropdown
          selection
          options={operandOptions}
          value={operation}
          onChange={handleOperandChange}
          disabled={status}
          />
        </div>
        <div>
          <h3 className="toolbar-label">Difficulty</h3>
          <Dropdown
          label="Difficulty"
          selection
          options={difficultyOptions}
          value={difficulty}
          onChange={handleDifficultyChange}
          disabled={status}
          />
        </div>
      </div>
    </div>
  )
}

export default Toolbar; 