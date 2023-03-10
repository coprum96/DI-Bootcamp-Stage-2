import React from 'react';
import Day from './Day';

//import the store from store/index.js file
import { store } from "./store";

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
         <Day />
        <Day weekday={store.getState().weekday} />
      </div>
    )
  }
}

export default App;
