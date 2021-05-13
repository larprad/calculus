// composants
import {Icon} from 'semantic-ui-react';

// styles
import './info.css';


const Info = ({icon, content}) => {
  return (
    <div className="info">
      <div className="info-icon">
        <Icon size="large" name={icon} color={"violet"}/>
      </div> 
      <h2>{content}</h2>
    </div>
  )
};

export default Info;