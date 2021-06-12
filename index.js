let number;
let number1;


function add(number, number1) {
    return number + number1;
    }
    
function subtract(number, number1) {
    return number - number1;
    }
    
function multiply(number, number1) {
    return number * number1;
}
    
function divide(number, number1) {
    return number / number1;
}
    
function increment(number) {
    return number += 1;
}

function decrement(number) {
    return number -= 1;
}

function makeInt(string) {
    return parseInt(string, 10);
}

function preserveDecimal(string) {
    return parseFloat(string);
}


add(5, 4);
subtract(5, 4);
multiply(5, 4);
divide(5, 4);
increment(5);
decrement(5);
makeInt("5");
preserveDecimal("5.55");

