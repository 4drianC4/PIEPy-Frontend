import React from 'react';
import logo from '../logo.svg';

function Index() {
  return (
    <div className="Index">
      <header className="Index-header">
        <img src={logo} className="Index-logo" alt="logo" />
        <a
          className="Index-link"
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

export default Index;