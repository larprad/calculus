// styles
import './number.css';

const Number = ({number, status}) => {
  return (
    <div className="number">
      <h1>{status ? number : "?"}</h1>
    </div>
  )
} ;

export default Number;