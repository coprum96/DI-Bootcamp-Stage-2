import React from 'react'
import './App.css';
import { store } from './reducers/counter'
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>App</div>
        <Counter />
      </header>
    </div>
  );
}

export default App;

