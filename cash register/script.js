let price = 3.26; //price of the item
let cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]; // cash in the change drawer

const cash = document.getElementById("cash"); // cash provided by the customer
const changeDueDisplay = document.getElementById("change-due"); //display changes owed
const purchaseButton = document.getElementById("purchase-btn");
const  priceScreen = document.getElementById("price");
const  cashDrawerDisplay = document.getElementById("change-drawer-display"); //display changes left in the drawer

//format the output display
const formatOutputDisplay = (status, change) => {
  changeDueDisplay.innerHTML = `<p>Status: ${status}</p>`;
  change.map(
    (money) => {
      changeDueDisplay.innerHTML += `<p>${money[0]}: $${money[1]}</p>`; // money array -> e.g. ["ONE", 90]
    }
  );
return;
}

// check if the customer pays enough to cover the cost of items
const checkCustomerCashAmount = () => {
  // customer doesn't have enough money
  if (Number(cash.value) < price) {
    alert("Customer does not have enough money to purchase the item");
    cash.value = '';
    return;
  }

  //no change is returned to the customer
  if (Number(cash.value) === price) {
    changeDueDisplay.innerHTML = `<p>No change due - customer paid with exact cash</p>`;
    cash.value = '';
    return;
  }

  // when there is sufficient cash given by the customer
let changeOwed = Number(cash.value) - price;
let denominations = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01];
let output = { status: 'OPEN', change: [] };
let cidReversed = [...cid].reverse();
let totalCid = parseFloat(
  cid
  .map(total => total[1])
  .reduce((acc, elem) => acc + elem, 0)
  .toFixed(2)
); // sum up all the changes in the drawer

// can't return enough changes back to customer
if (totalCid < changeOwed) {
  return (changeDueDisplay.innerHTML = `<p>Status: INSUFFICIENT_FUNDS</p>`);
}

//no more changes available in the drawer
if (totalCid === changeOwed) {
  output.status = 'CLOSED';
}

//need to return changes back to customers
for (let i = 0; i <= cidReversed.length; i ++) {
  if (changeOwed > 0 && changeOwed > denominations[i]) {
    let count = 0;
    let total = cidReversed[i][1];
    while (total > 0 && changeOwed >= denominations[i]) {
      total -= denominations[i];
      changeOwed = parseFloat(
        (changeOwed -= denominations[i]
      ).toFixed(2));
      count ++;
    }
    if (count > 0) {
      output.change.push([cidReversed[i][0], count*denominations[i]]);
    }
  }
}

//?
if (changeOwed > 0) {
  return (changeDueDisplay.innerHTML = '<p>Status: INSUFFICIENT_FUNDS</p>');
}

// format the final result
formatOutputDisplay(output.status, output.change);
updateUI(output.change);
};

// function to validate the final output
const checkResult = () => {
  if (!cash.value) {
    return;
  }
  checkCustomerCashAmount();
};

const updateUI = change => {
  const currencyNameMap = {
    PENNY: 'Pennies',
    NICKEL: 'Nickels',
    DIME: 'Dimes',
    QUARTER: 'Quarters',
    ONE: 'Ones',
    FIVE: 'Fives',
    TEN: 'Tens',
    TWENTY: 'Twenties',
    'ONE HUNDRED': 'Hundreds'
  };
  // Update cid if change is passed in
  if (change) {
    change.forEach(changeArr => {
      const targetArr = cid.find(cidArr => cidArr[0] === changeArr[0]);
      targetArr[1] = parseFloat((targetArr[1] - changeArr[1]).toFixed(2));
    });
  }

  cash.value = '';
  priceScreen.textContent = `Total: $${price}`;
  cashDrawerDisplay.innerHTML = `<p><strong>Change in drawer:</strong></p>
    ${cid
      .map(money => `<p>${currencyNameMap[money[0]]}: $${money[1]}</p>`)
      .join('')}  
  `;
};

purchaseButton.addEventListener('click', checkResult);

cash.addEventListener(
  'keydown', e => {
    if (e.key === 'Enter') {
      checkResult();
    }});

updateUI();

// note:
// if the drawer is out of cash, status should be set to "CLOSED" (after the last due paid to the customer)





/*
 
notes:
1. ${money[0]}: $${money[1]} ????
change.map(
    money => (displayChangeDue.innerHTML += `<p>${money[0]}: $${money[1]}</p>`)
  );

reference: see cid array
money[0] --> in the money array, money[0] refers to the first element
money[1] --> second element



2. changesName[money[0]] vs money[1]
cashDrawerDisplay.innerHTML = `<p>
  <strong>Change in drawer:</strong></p>
  ${
    cid
    .map(money => `<p>${changesName[money[0]]}: $${money[1]}</p>`)
    .join('')}
  `;

 */