import React from "react";
import { useState } from "react";

const EvenOrOddChecker = () => {
  const [inputText, setInputText] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCheck = () => {
    setLoading(true);
    setTimeout(() => {
      const parsedValue = parseInt(inputText, 10);
      if (isNaN(parsedValue)) {
        setResult("Please enter a valid number.")
      } else {
        setResult(`The number ${parsedValue} is ${parsedValue % 2 === 0 ? "even." : 'odd.'}`)
      }
      setLoading(false);
    }, 1000)
   
  }

  return (
    <div className="even-odd-container">
      <h1 className="title">Even or Odd Checker</h1>

      <input
        className="number-input"
        type="text"
        placeholder="Enter a number"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />

      <button className="check-button" onClick={handleCheck}>Check</button>

      <div className="result-area">
        {loading ? <div className="result">Checking...</div> : result !== null ? <div className="result">{result}</div> : null}
      </div>
    </div>
  );
}

export default EvenOrOddChecker;
