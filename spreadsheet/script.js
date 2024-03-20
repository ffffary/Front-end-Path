// number range function:  range() returns an array
const range = (start, end) => Array(end - start + 1).fill(start).map((element, index) => element + index);

// char range function: charRange returns an array
const charRange = (start, end) => range(start.charCodeAt(0), end.charCodeAt(0)).map(code => String.fromCharCode(code));


