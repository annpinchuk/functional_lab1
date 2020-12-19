const Logic = (x) => ({
    and: (y) => !!x && !!y,
    or: (y) => !!x || !!y,
    xor: (y) => !!(x ^ y),
    not: () => !x,
    implication: (y) => x <= y,
    equals: (y) => !!x === !!y,
});

console.log(Logic(false).and(true));
console.log(Logic(false).or(true));
console.log(Logic(true).xor(false));
console.log(Logic(false).xor(true));
console.log(Logic(false).xor(false));
console.log(Logic(true).not());
console.log(Logic(true).implication(true));
console.log(Logic(true).implication(false));
console.log(Logic(false).implication(false));
console.log(Logic(false).implication(true));
console.log(Logic(false).equals(true));
console.log(Logic(false).equals(false));
