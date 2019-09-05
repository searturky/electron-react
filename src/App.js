import React from 'react';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Button type="primary">11</Button>
      <Button type="primary">11</Button>
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
