//method with use loop
let num1 = parseFloat(prompt("Enter number"));

function fibNumber(n) {
    let n1 = 1;
    let n2 = 1;
    for(var i = 3; i <= n; i++) {
        let n3 = n1 + n2;
        n1 = n2;
        n2 = n3;
    } 
    return n2
}
let num = fibNumber(num1);
document.write('First method with use loop : ' + num);
document.write('<br>');

//method with use recursion
function fibonacci(n) {
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}
let newNumber = fibonacci(num1);
document.write('Second method with use recursion : ' + newNumber);
document.write('<br>');

//method with use array
var fibonacciArray = [];
function calcFib(num1) {
    let n1 = 1;
    let n2 = 1;
    for(var i = 3; i <= num1; i++) {
        let n3 = n1 + n2;
        n1 = n2;
        n2 = n3;
    }
    return n2;
}
fibonacciArray.push(+num1);

let newF = calcFib(num1);
document.write('Third method with use array : ' + newF);













