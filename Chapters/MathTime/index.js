var num1 = 69;
var num2 = 10;

function multiplication() {
    return num1 * num2;
}

function addition() {
    return num1 + num2;
}

function subtraction() {
    return num1 - num2;
}

function division() {
    return num1 / num2;
}

function modulus() {
    return num1 % num2;
}

console.log(`Multiplication: ${num1} * ${num2} = ${multiplication()}`);
console.log(`Addition: ${num1} + ${num2} = ${addition()}`);
console.log(`Subtraction: ${num1} - ${num2} = ${subtraction()}`);
console.log(`Division: ${num1} / ${num2} = ${division()}`);
console.log(`Modulus: ${num1} % ${num2} = ${modulus()}\n`);
console.log(`Increment: ${num1}+=10 --> ${num1 += 10}`);
console.log(`Decrement: ${num2}-=2 --> ${num2-=2}`);