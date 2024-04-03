//Part 0: get elements by accessing IDs from DOM
const userInput = document.getElementById('text-input');
const validatePalindromeBtn = document.getElementById('check-btn');
const resultSection = document.getElementById('result');

//Part 1: anonymous function -->to get user input and validate it
//note: "input" is passed into the anonymous function as a parameter, it is an element for collecting user's inputs!
const validatePalindrome = input => {
  const originalInput = input; // save the initial user input for later usage

  if (input === '') {
    alert('Please input a value');
    return;
  }

  // Remove the previous result
  resultSection.replaceChildren(); // to remove a node of all its children

  //turn all non-alphabet/digit characters into empty string, then uniform the input as all lowercase letters
  const lowerCaseInput = input.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
  let resultMsg = `<strong>${originalInput}</strong> ${
    lowerCaseInput === [...lowerCaseInput].reverse().join('') ? 'is' : 'is not'
  } a palindrome.`; // g: global flag, i: case insensitive flag, ^: negation, not include sth

  // create a new element p in the DOM
  const pEle = document.createElement('p');
  pEle.className = 'user-input';
  pEle.innerHTML = resultMsg;
  resultSection.appendChild(pEle);

  // Show the result
  resultSection.classList.remove('hidden');
};


//Part3: add 2 event listeners on the corresponding objects

//listen on the "check" button:
validatePalindromeBtn.addEventListener('click', () => {
  //get user's input
  validatePalindrome(userInput.value);
  //reset
  userInput.value = '';
});

//listen on the input text:
userInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    validatePalindrome(userInput.value);
    userInput.value = '';
  }
});
