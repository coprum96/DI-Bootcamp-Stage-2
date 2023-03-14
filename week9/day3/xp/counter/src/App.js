import './App.css';
import React from 'react'
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
            <h1>Counter</h1>
            <Counter />
        </div>
      </header>
    </div>
  );
}

export default App;
