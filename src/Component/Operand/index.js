// componants
import {Icon} from 'semantic-ui-react';

// utils
import {getIconFromOperandValue} from '../../Utils'

// styles
import './operand.css'

const Operand = ({operand}) => {
  const iconName = getIconFromOperandValue(operand);

  return (
    <div className="operand">
      <Icon size={"large"} name={iconName}/>
    </div>
  )
};

export default Operand;
