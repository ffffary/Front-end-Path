const input = document.getElementById("user-input");
const checkButton = document.getElementById("check-btn");
const clearButton = document.getElementById("clear-btn");
const result = document.getElementById("results-div"); 

const validateUserInput = (input) => {
  // edge case: empty string 
  if (input === "") {
    alert('Please provide a phone number');
    return;
  }

  // determine whether the number is valid or not
  // regular expressions to stand for possible phone number combinations 
  // US phone number: countryCode + areaCode + phoneNumber
  const countrycode = '^(1\\s?)?'; 
  const areaCode = '(\\([0-9]{3}\\)|[0-9]{3})';
  const spaceDash = '[\\s\\-]?';
  const phoneNumber = '[0-9]{3}[\\-\\s]?[0-9]{4}$';

  // create new regular expression object
  const phoneRegE = new RegExp(
    `${countrycode}${areaCode}${spaceDash}${phoneNumber}`
  );

// how to update the result-display section?

// create a new element (p) in the result-div section
const pTag = document.createElement('p');

// give a class name to the new element
pTag.className = "results-text";

// render the display text based the string matching result
// - test if the input string matches the regExp:
phoneRegE.test(input) ? (pTag.style.color = '#BFDB38') : (pTag.style.color = '#EB6440');

// keep appending more p elements to the result section
pTag.appendChild(document.createTextNode(`
  ${phoneRegE.test(input) ? 'Valid' : 'Invalid'} US number: ${input}
`));
result.appendChild(pTag);
};


// get users input and display the result to the screen
const getUserInput = () => {
  if (validateUserInput(inputString)) {
    result.innerHTML += `<p>Valid US number: </p>${inputString}`;
    return;
  } else {
    result.innerHTML += `<p>Invalid US number: </p>${inputString}`;
    return;
  }
}

// add event listener on the 'input' element
input.addEventListener(
  'keydown', (e) => {
    if (e.key === 'Enter') {
      validateUserInput(input.value);
      input.value = "";
    }
  }
);

// add event listener on the 'check' button
checkButton.addEventListener(
  'click', () => {
  validateUserInput(input.value);
  input.value = "";
  }
);

// add event listener on the 'clear' button - reset the result div content
clearButton.addEventListener(
  'click', () => {
  result.textContent = "";
  }
);


