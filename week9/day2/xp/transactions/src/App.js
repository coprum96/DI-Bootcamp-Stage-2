import React from 'react';
// import logo from './logo.svg';
import './App.css';
import TransactionList from './components/TransactionList';

function App() {
  return (
    <div className="App">
      <h1>Financial Transactions:</h1>
    <TransactionList />
    </div>
  );
}

export default App;
