import React from 'react';
import './App.css';
import Age from './components/Age';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducer from "./store/reducer";
import logAction from "./store/middelware";

const store = createStore(reducer, applyMiddleware(logAction));

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <Age />
        </header>
      </div>
    </Provider>
  );
}

export default App;
