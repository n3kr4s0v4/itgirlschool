function sum () {
    let a = document.getElementById ('firstNum').value;
    let b = document.getElementById ('secondNum').value;
    alert (+a + +b) ;
}

function sub () {
    let a = document.getElementById ('firstNum').value;
    let b = document.getElementById ('secondNum').value;
    alert (a - b) ;
}

function multi () {
    let a = document.getElementById ('firstNum').value;
    let b = document.getElementById ('secondNum').value;
    alert (a * b) ;
}

function divis () {
    let a = document.getElementById ('firstNum').value;
    let b = document.getElementById ('secondNum').value;
    (b == 0) ? alert ("На ноль делить нельзя!") : alert (a / b)
}

