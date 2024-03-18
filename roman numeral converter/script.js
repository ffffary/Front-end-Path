const form = document.getElementById("form");
const convertButton = document.getElementById("convert-btn");
const output = document.getElementById("output");

// function to covert Arabic numerals to Roman numerals
const arabicToRoman = num => {
  // store Roman numerals and their corresponding Arabic numerals in an a list of arrays
const check = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
]
// an empty array to store the final result
const res = [];
check.forEach(
  function (arr) {
    while (num >= arr[1]) {
      res.push(arr[0]);
      num -= arr[1];
    }
  });
  return res.join('');
};

// function to check if the input number is valid
const isValid = (str, int) => {
  let errorMsg = '';
  if (!str || str.match(/[e.]g/)) {
    errorMsg = 'Please enter a valid number';
  } else if (int < 1) {
    errorMsg = 'Please enter a number greater than or equal to 1';
  } else if (int >= 4000) {
    errorMsg = 'Please enter a number less than or equal to 3999';
  } else {
    return true; // correct user input
  }

// handle output styles 
output.innerText = errorMsg; //display error messages to the screen
output.classList.add('alert');// add the CSS alert class to the HTML element(output) ----> apply the CSS alert style to the displayed content
return false;

};

// remove the output and its alert style
const clearOutput = () => {
  output.innerText = '';
  output.classList.remove('alert'); // remove the CSS alert class from the HTML element(output)
}

// add event listener on the form and the convert button
form.addEventListener(
  'submit', e => {
    e.preventDefault();
    updateUI();
  } 
);

convertButton.addEventListener(
  'click', () => {
    updateUI();
  }
);

// update the user interface
const updateUI = () => {
  const numberStr = document.getElementById('number').value;
  const numberInt = parseInt(numberStr, 10);

  output.classList.remove('hidden');
  clearOutput();
  if (isValid(numberStr, numberInt)) {
    output.innerText = arabicToRoman(numberInt);
  }
};