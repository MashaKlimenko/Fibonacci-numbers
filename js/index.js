//спосіб 1
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

//спосіб 2
function fibonacchi(n) {
    return n <= 1 ? n : fibonacchi(n - 1) + fibonacchi(n - 2);
}
let newNumber = fibonacchi(num1);
document.write('Second method with use recursion : ' + newNumber);
document.write('<br>');

//спосіб 3
var fibonacchiArray = [];
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
fibonacchiArray.push(+num1);

let newF = calcFib(num1);
document.write('Third method with use array : ' + newF);













