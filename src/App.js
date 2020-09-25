import React from 'react';
import logo from './logo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>MUY PRONTO</h3>
        <p className="last-item">
          <a href="http://salvamivida.org/" target="_blank" rel="noopener noreferrer">
            Fundación Hondureña Para El Niño Con Cáncer 
            <span className="copyright">
              &#169; 2020
            </span>
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
