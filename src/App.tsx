import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TextColor text="Hello World" color="red" />
        <TextColor text="สวัสดีชาวโลก" color="blue" />
        <TextColor text="อัญมณี" />
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

const TextColor = ({
  text,
  color = "black",
}: {
  text: string;
  color?: string;
}) => {
  return <p style={{ color }}>{text.toUpperCase()}</p>;
};

export default App;
