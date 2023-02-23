import { useState, useEffect } from "react";
import "./App.css";

// const Toggle = styled.button<{ data: any }>`
//   color: ${(props: any) => (props.data ? "#0f0" : "#f00")};
//   border: ${(props: any) => (props.data ? "2px solid #0f0" : "2px solid #f00")};
// `;

function App() {
  const [length, setLength] = useState(8);
  const [upperFlag, setUpperFlag] = useState(true);
  const [lowerFlag, setLowerFlag] = useState(true);
  const [digitFlag, setDigitFlag] = useState(true);
  const [symbolFlag, setSymbolFlag] = useState(true);
  const [passwords, setPasswords] = useState([]);



  const characters = {
    uppercase: [
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
    ],
    lowercase: [
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
    ],
    numbers: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    symbols: [
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
    ],
  };

  function decrement() {
    if (length > 4) {
      setLength((prevVal) => prevVal - 1);
    }
  }

  function increment() {
    if (length < 24) {
      setLength((prevVal) => prevVal + 1);
    }
  }

  function compileCharacters() {
    let charString: any = [];
    if (upperFlag) {
      charString = charString.concat(characters.uppercase);
    }
    if (lowerFlag) {
      charString = charString.concat(characters.lowercase);
    }
    if (digitFlag) {
      charString = charString.concat(characters.numbers);
    }
    if (symbolFlag) {
      charString = charString.concat(characters.symbols);
    }
    return charString;
  }

  function generatePasswords() {
    let chars = compileCharacters();
    if (chars.length === 0) {
      return;
    }


    let pwList: any = [];
    for (let i = 0; i < 10; i += 1) {
      let pw = "";

      for (let i = 0; i < length; i += 1) {
        let randomIndex = Math.floor(Math.random() * chars.length);
        pw += chars[randomIndex];
      }

      pwList.push(pw);
    }
    setPasswords(pwList);



  }

  function copyPassword(password: any) {
    navigator.clipboard.writeText(password);
  }


useEffect(()=> {
  generatePasswords();
}, [])

  return (
    <div className="App">
      <div className="header">
        <h1>
          Generate a <span className="emphasis">random password</span>
        </h1>
        <p>
          Never use an <span className="warning">insecure</span> password again.
        </p>
      </div>

      <div className="generate-menu">
        <div className="generator">


          <div className="generator-form">
            <div className="length-input">
              <div className="counter-screen">
                <p className="counter-val">{length}</p>
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
              <ToggleButton
                text="Uppercase"
                onToggle={setUpperFlag}
                default={upperFlag}
              />
              <ToggleButton
                text="Lowercase"
                onToggle={setLowerFlag}
                default={lowerFlag}
              />
              <ToggleButton
                text="Digits"
                onToggle={setDigitFlag}
                default={digitFlag}
              />
              <ToggleButton
                text="Symbols"
                onToggle={setSymbolFlag}
                default={symbolFlag}
              />
            </div>
          </div>

          <button onClick={generatePasswords} className="btn-generate">
            Generate Passwords
          </button>
        </div>

        <div className="generated-btns">
          {passwords.map((pw) => {
            return (
              <button
                key={pw}
                onClick={() => copyPassword(pw)}
                className="btn-generate"
              >
                {pw}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;

function ToggleButton(props: any) {
  const [toggled, setToggled] = useState(props.default);
  let clrOn = "#00ff00";
  let clrOff = "#ff0000";

  function handleChange() {
    const newToggled = !toggled;
    setToggled(newToggled);
    props.onToggle(newToggled);
  }

  return (
    <button
      className="btn"
      onClick={handleChange}
      style={{
        color: toggled ? clrOn : clrOff,
        borderColor: toggled ? clrOn : clrOff,
      }}
    >
      {props.text}
    </button>
  );
}
