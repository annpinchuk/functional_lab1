const countLowercase = (str) => [...str].reduce((count, char) => char === char.toLowerCase() ? count + 1 : count, 0)

console.log(countLowercase("aBCde"));