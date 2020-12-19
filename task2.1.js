const Complex = (realPart, imagPart) => ({
    realPart,
    imagPart,
    toString() {
        return `${realPart} + ${imagPart}i`;
    }
});

console.log(Complex(3, 5).toString());