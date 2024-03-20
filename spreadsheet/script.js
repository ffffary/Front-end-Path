// number range function:  range() returns an array
const range = (start, end) => Array(end - start + 1).fill(start).map((element, index) => element + index);

// char range function: charRange returns an array
const charRange = (start, end) => range(start.charCodeAt(0), end.charCodeAt(0)).map(code => String.fromCharCode(code));




// elemValue  ---> returns a function
// if no parameters are given to elemValue inside of map, 
// .map(elemValue) will return an array of function references
// to avoid that, pass sth as the argument ->.map(elemValue(num))