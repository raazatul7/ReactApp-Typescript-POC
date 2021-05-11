import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [sum, setSum] = useState(0)

  const add = (num1: number, num2: number) => {
    setSum(num1 + num2)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{sum}</h1>
        <button onClick={() => add(1, 2)} />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
