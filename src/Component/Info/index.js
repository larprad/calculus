// styles
import './info.css';


const Info = ({number, title}) => {
  return (
    <div className="info">
      <h3>{title}</h3>
      <h2>{number}</h2>
    </div>
  )
};

export default Info;