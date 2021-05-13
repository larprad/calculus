// libs
import {useState} from 'react';

// composants
import {Icon, Dropdown} from 'semantic-ui-react';
import Info from '../Info';

// utils
import {getDifficultyStringFromNumber} from '../../Utils/index';

// styles
import './settings.css';

const Settings = ({
  operandOptions,
  difficultyOptions,
  operation,
  difficulty,
  setOperation,
  setDifficulty,
  status,
  streakCount,
  timer
}) => {
  const [isOpen, setIsOpen ] = useState(false);

  const handleOpen = () => {
    if(!status) setIsOpen(!isOpen);
  };

  const handleOperandChange = (e, {value}) => {
    setOperation(value);
  };
  const handleDifficultyChange = (e, {value}) => {
    setDifficulty(value);
  };

  return (
    <div className={isOpen ? "settings open" : "settings"}>
      <div className="settings-main">
        <div className="settings-main-container">
          <h1 className="settings-main-title">Settings</h1>
          <Dropdown
            selection
            className="settings-main-dropdown"
            options={operandOptions}
            value={operation}
            onChange={handleOperandChange}
            disabled={status}
            fluid
          />
          <Dropdown
            className="settings-main-dropdown"
            label="Difficulty"
            selection
            options={difficultyOptions}
            value={difficulty}
            onChange={handleDifficultyChange}
            disabled={status}
            fluid
          />
        </div>
        <div className="settings-main-container">
          <h1 className="settings-main-title">Best Streaks</h1>
        </div>
      </div>
    <div className={ status ? "settings-control hide" : "settings-control" } onClick={handleOpen}>
      <Icon name={isOpen ? "arrow alternate circle left" : "arrow alternate circle right"} size="big" color="olive"/>
    </div>
    <div className="settings-info">
      <Info icon={"chart line"} content={getDifficultyStringFromNumber(difficulty)}/>
      <Info icon={"gem"} content={streakCount}/>
      <Info icon={"wait"} content={timer}/>
    </div>
    </div>
  )
};

export default Settings;