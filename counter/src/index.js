import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const { useState } = React;

const IncrementButton = ({increment, onClick}) => {
  const handleClick = () => {
    onClick(increment);
  }

  return <button onClick={handleClick}>+{increment}</button>
}

const ClearButton = ({onClick}) => {
  const handleClick = () => {
    onClick();
  }

  return <button onClick={handleClick}>Clear</button>
}

const App = () => {

  const [count, setCount] = useState(0);

  const incrementCount = increment => {
    setCount(count + increment);
  }

  const clearBox = () => {
    setCount(0);
  }

  return (
    <div className='form'>
      <p>Counter</p>
      <div className='incCount'>{count}</div>
      <div className='increments'>
        <IncrementButton increment={1} onClick={incrementCount} />
        <IncrementButton increment={10} onClick={incrementCount} />
        <IncrementButton increment={100} onClick={incrementCount} />
        <IncrementButton increment={1000} onClick={incrementCount} />
      </div>
      <ClearButton onClick={clearBox} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);