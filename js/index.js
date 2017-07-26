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
document.write(num);