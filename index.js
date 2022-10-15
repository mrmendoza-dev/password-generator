

const uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?"];

let generateBtn = document.getElementById("generateBtn");
let generatedPWs = document.getElementsByClassName("generated-btn");

let pwSize = 8;
let countEl = document.getElementById("count-el");

function decrement() {
  pwSize -= 1;
  countEl.textContent = pwSize;
}

function increment() {
  pwSize += 1;
  countEl.textContent = pwSize;
}


let upperFlag = true;
let lowerFlag = true;
let digitFlag = true;
let symbolFlag = true;


function compileCharacters() {
    let characters = [];
    if (upperFlag === true) {
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
    return characters;password;
}

function generatePasswords() {
    let chars = compileCharacters();


    if (chars.length === 0) {
        return;
    }

    for (let i = 0; i < generatedPWs.length; i+=1) {
        let pw = "";

        for (let i = 0; i < pwSize; i += 1) {
            randomIndex = Math.floor(Math.random() * chars.length);
            pw += chars[randomIndex];
        }

        generatedPWs[i].textContent = pw;
    }

}

function copyPassword(password) {
      var copyText = password.innerText;
      navigator.clipboard.writeText(copyText);

}

function toggleUpper(el) {
    upperFlag = !upperFlag;
    toggleColor(el, upperFlag);
  }
function toggleLower(el) {
  lowerFlag = !lowerFlag;
  toggleColor(el, lowerFlag);
}
function toggleDigits(el) {
  digitFlag = !digitFlag;
  toggleColor(el, digitFlag);
}
function toggleSymbols(el) {
  symbolFlag = !symbolFlag;
  toggleColor(el, symbolFlag);
}


function toggleColor(el, filter) {
    if (filter) {
        el.style.color = "#0f0";
        el.style.border = "1px solid #0f0";

    } else {
        el.style.color = "#f00";
        el.style.border = "1px solid #f00";
    }
}


generateBtn.addEventListener("click", generatePasswords)













