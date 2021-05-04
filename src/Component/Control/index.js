// components
import {Button, Icon} from 'semantic-ui-react';
import Info from '../Info';

// styles
import './control.css';

const Control = ({stop, status, start, timer, streakCount}) => {
  return (
    <div className="control">
      <div className="control-container"> 
        <div className="info-container">
          
          {
            !status 
            ? <Button onClick={start} icon labelPosition='left' color='green' size='huge'>
                <Icon name='play'/>
                Start
              </Button>
            : <Button onClick={stop} icon labelPosition='left' color='red' size='huge'>
                <Icon name='stop'/>
                Stop
              </Button>
          }
        </div>
        <div className="info-container">
          <Info title={'Streak'} number={streakCount}/>
          <Info title={'Timer'} number={timer}/>
        </div>
      </div>
    </div>
  );
};

export default Control;