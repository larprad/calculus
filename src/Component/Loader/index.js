// styles
import './loader.css';

const Loader = ({timer, init}) => {
  const rightPosVal = (100 / init) * timer + '%';
  const style = {
    right: rightPosVal,
    backgroundColor: !timer ? 'red' : 'var(--second-color)', 
  }
  
  return (
    <div className="loader" style={style}>

    </div>
  )
}

export default Loader;