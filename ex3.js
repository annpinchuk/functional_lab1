const multiplicity = (a, b) => {
    if (b > 0) {
        return a + multiplicity(a, b - 1);
    }
    else if (b < 0) {
        return -a + multiplicity(a, b + 1);
    }

    return 0;
}

console.log(multiplicity(5, 3));
console.log(multiplicity(3, 5));
console.log(multiplicity(0, 5));
console.log(multiplicity(0, 0));

