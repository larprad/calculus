import './result.css';

const Result = ({results, status, submitResult}) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit', e.target.value);
    submitResult(e.target.value);
  }

  return (
    <div className="result" onSubmit={handleSubmit}>
      {results && status
        ? results.map(x => <button key={Math.random()} value={x} onClick={handleSubmit} className='result-button active'>{x}</button>)
        : <h3>Push Start to begin!</h3>
      }
    </div>
  )
};

export default Result;
