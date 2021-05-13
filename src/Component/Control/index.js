// components
import {Button, Icon} from 'semantic-ui-react';

// styles
import './control.css';

const Control = ({stop, status, start }) => {
  return (
    <div className="control">
      {
        !status 
        ? <Button onClick={start} icon labelPosition='left' color='green' size='huge' fluid>
            <Icon name='play'/>
            Start
          </Button>
        : <Button onClick={stop} icon labelPosition='left' color='red' size='huge' fluid>
            <Icon name='stop'/>
            Stop
          </Button>
      }
    </div>
  );
};

export default Control;