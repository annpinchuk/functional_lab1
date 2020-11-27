const listAnd = (arr) => arr.every(item => item === true);

console.log(listAnd);
console.log(listAnd([]));
console.log(listAnd([true, true]));
console.log(listAnd([true, true, false]));

const listOr = (arr) => arr.some(item => item === true) || arr.length === 0;

console.log(listOr);
console.log(listOr([]));
console.log(listOr([true, true]));
console.log(listOr([true, true, false]));
console.log(listOr([false, false, false]));

