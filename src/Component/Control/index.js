// components
import {Button, Icon} from 'semantic-ui-react';

// styles
import './control.css';

const Control = ({resetNumbers}) => {
  return (
    <div className="control">
      <Button onClick={resetNumbers} icon labelPosition='left' color='grey' size="big">
        <Icon name='redo'/>
        Reset numbers
      </Button>
      {/* <Button icon labelPosition='right' color='green' size="big">
        <Icon name='fire'/>
        Validate!
      </Button> */}
    </div>
  );
};

export default Control;