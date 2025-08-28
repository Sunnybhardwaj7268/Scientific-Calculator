import { useState } from 'react';
import './Calculator.css';

function Calculator() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);

  const appendInput = (value) => setInput(input + value);

  const clearInput = () => setInput('');

  const calculate = () => {
    try {
      // eslint-disable-next-line no-eval
      const result = eval(input);
      setHistory([input + ' = ' + result, ...history]);
      setInput(result.toString());
    } catch {
      setInput('Error');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') calculate();
  };

  return (
    <div className="calculator-container" onKeyDown={handleKeyPress} tabIndex="0">
      <div className="calculator">
        <div className="display">{input || '0'}</div>
        <div className="buttons">
          <button onClick={() => appendInput('(')}>(</button>
          <button onClick={() => appendInput(')')}>)</button>
          <button onClick={clearInput}>C</button>
          <button onClick={() => appendInput('/')}>/</button>

          <button onClick={() => appendInput('7')}>7</button>
          <button onClick={() => appendInput('8')}>8</button>
          <button onClick={() => appendInput('9')}>9</button>
          <button onClick={() => appendInput('*')}>*</button>

          <button onClick={() => appendInput('4')}>4</button>
          <button onClick={() => appendInput('5')}>5</button>
          <button onClick={() => appendInput('6')}>6</button>
          <button onClick={() => appendInput('-')}>-</button>

          <button onClick={() => appendInput('1')}>1</button>
          <button onClick={() => appendInput('2')}>2</button>
          <button onClick={() => appendInput('3')}>3</button>
          <button onClick={() => appendInput('+')}>+</button>

          <button onClick={() => appendInput('0')}>0</button>
          <button onClick={() => appendInput('.')}>.</button>
          <button className="equal" onClick={calculate}>=</button>
        </div>
      </div>
      <div className="history">
        <h3>History</h3>
        <ul>
          {history.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Calculator;