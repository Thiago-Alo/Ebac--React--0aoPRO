import React, { useState } from 'react';
import moment from 'moment';
import './App.css';

const MyComponent = ({ text }) => {
  const date = moment().format('HH:mm:ss DD/MM/YYYY');
  return (
    <div>
      <h1>{text}</h1>
      <p>{date}</p>
    </div>
  );
};

const App = () => {
  const [text, setText] = useState("Hello World");
  const date = moment().format('HH:mm:ss DD/MM/YYYY');

  const greeting = "Hello World";

  const name = "John";
  const message = `Hello ${name}`;

  const getGreeting = () => {
    return "Hello World";
  };

  const method8 = `Hello ${name}, World`;

  const method9 = "Hello".concat(" World");

  const method11 = "Hello " + "World";

  const method12 = ["Hello", "World"].join(" ");

  return (
    <div className="App">
      <h1>Hello World</h1>
      <p>{date}</p>

      <h1>{greeting}</h1>
      <p>{date}</p>

      <MyComponent text="Hello World" />

      <h1>{message}</h1>
      <p>{date}</p>

      <h1>{getGreeting()}</h1>
      <p>{date}</p>

      <h1>{text}</h1>
      <p>{date}</p>

      <h1>{method8}</h1>
      <p>{date}</p>

      <h1>{method9}</h1>
      <p>{date}</p>

      <h1>{method11}</h1>
      <p>{date}</p>

      <h1>{method12}</h1>
      <p>{date}</p>
    </div>
  );
};

export default App;
