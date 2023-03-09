import React, { useState } from "react";
import quotes from './Components/quotes.json';
import "./App.css";
import QuoteAndName from "./Components/QuoteAndName";

function App() {
  const [quote, setQuote] = useState(quotes[0].quote);
  const [name, setName] = useState(quotes[0].name);

  const randomQuote = () => {
    const randomNumber = Math.floor(Math.random() * quotes.length);
    const { quote, name } = quotes[randomNumber];
    setQuote(quote);
    setName(name);
  };

  const randomColor = () => {
    const color = `rgb(
      ${Math.floor(Math.random() * 155)},
      ${Math.floor(Math.random() * 155)},
      ${Math.floor(Math.random() * 155)})`;
    return color;
  };

  return (
    <div>
      <QuoteAndName
        displayColor={randomColor}
        handleClick={randomQuote}
        quote={quote}
        name={name ? name : "Unknown"}
      />
    </div>
  );
}

export default App;

