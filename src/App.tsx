import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import styled from "styled-components";

const Toggle = styled.button<{ data: any }>`
  color: ${(props: any) => (props.data ? "#0f0" : "#f00")};
  border: ${(props: any) => (props.data ? "2px solid #0f0" : "2px solid #f00")};
`;

function App() {
  const [count, setCount] = useState(8)
  const [upperFlag, setUpperFlag] = useState(true);
  const [lowerFlag, setLowerFlag] = useState(true);
  const [digitFlag, setDigitFlag] = useState(true);
  const [symbolFlag, setSymbolFlag] = useState(true);


  const uppercase = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const lowercase = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const symbols = [
    "~",
    "`",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "_",
    "-",
    "+",
    "=",
    "{",
    "[",
    "}",
    "]",
    ",",
    "|",
    ":",
    ";",
    "<",
    ">",
    ".",
    "?",
  ];


  function decrement() {
    if (count > 4) {
      setCount(prevCount => prevCount - 1);
    }
  }

  function increment() {
    if (count < 24) {
      setCount((prevCount) => prevCount + 1);
    }
  }


  function compileCharacters() {
    let characters: any = [];
    if (upperFlag ) {
      characters = characters.concat(uppercase);
    }
    if (lowerFlag) {
      characters = characters.concat(lowercase);
    }
    if (digitFlag) {
      characters = characters.concat(numbers);
    }
    if (symbolFlag) {
      characters = characters.concat(symbols);
    }
    return characters;
  }


  function generatePasswords() {
    let chars = compileCharacters();

    if (chars.length === 0) {
      return;
    }

    // for (let i = 0; i < generatedPWs.length; i += 1) {
    //   let pw = "";

    //   for (let i = 0; i < count; i += 1) {
    //     let randomIndex = Math.floor(Math.random() * chars.length);
    //     pw += chars[randomIndex];
    //   }

    // }
  }

  function copyPassword(password: any) {
    // var copyText = password.innerText;
    // navigator.clipboard.writeText(copyText);
  }

  function toggleUpper() {
    setUpperFlag(prevState => !prevState)
  }
  function toggleLower() {
    setLowerFlag((prevState) => !prevState);
  }
  function toggleDigits() {
    setDigitFlag((prevState) => !prevState);
  }
  function toggleSymbols() {
    setSymbolFlag((prevState) => !prevState);
  }

  
  return (
    <div className="App">
        <div className="header">
          <h1>
            Generate a <span className="emphasis">random password</span>
          </h1>
          <p>
            Never use an <span className="warning">insecure</span> password
            again.
          </p>
        </div>

        <div className="generate-menu">
          <div className="generator">
            <div className="counter">
              <div className="counter-screen">
                <p className="counter-val">{count}</p>
              </div>

              <div className="counter-btns">
                <button className="decrement-btn" onClick={decrement}>
                  -
                </button>
                <button className="increment-btn" onClick={increment}>
                  +
                </button>
              </div>
            </div>

            <div className="filters">
              <Toggle
                data={upperFlag}
                onClick={toggleUpper}
                className="filter-btn"
              >
                Uppercase
              </Toggle>
              <Toggle
                data={lowerFlag}
                onClick={toggleLower}
                className="filter-btn"
              >
                Lowercase
              </Toggle>
              <Toggle
                data={digitFlag}
                onClick={toggleDigits}
                className="filter-btn"
              >
                Digits
              </Toggle>
              <Toggle
                data={symbolFlag}
                onClick={toggleSymbols}
                className="filter-btn"
              >
                Symbols
              </Toggle>

            </div>

            <button className="btn" id="generateBtn">
              Generate Passwords
            </button>
          </div>

          <div className="generated">
            <button onClick={copyPassword} className="btn generated-btn">
              PASSWORD
            </button>
          </div>
        </div>
    </div>
  );
}

export default App
