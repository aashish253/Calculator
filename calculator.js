var firstnumber;
var secondnumber;
var result;
var operation;

var x = document.getElementById("txt");

function clearval() {
    document.getElementById("txt").value = '';
}

function valuess(val) {
    document.getElementById("txt").value += val;
}

function addition() {
    operation = "+";
    firstnumber = parseFloat(x.value);
    x.value = firstnumber + operation;
    // x.value = '';

}
function multiplication() {
    operation = "*";
    firstnumber = parseFloat(x.value);
    x.value = firstnumber + operation;
    // x.value = '';

}
function substraction() {
    operation = "-";
    firstnumber = parseFloat(x.value);
    x.value = firstnumber + operation;
    // x.value = '';

}
function dividation() {
    operation = "/";
    firstnumber = parseFloat(x.value);
    x.value = firstnumber + operation;
    // x.value = '';
}
function equalsto() {
    secondnumber = parseFloat(x.value);
    if (operation == "+") {
        result = firstnumber + secondnumber;
    }
    else if (operation == "*") {
        result = firstnumber * secondnumber;
    }
    else if (operation == "-") {
        result = firstnumber - secondnumber;
    }
    else if (operation == "/") {
        result = firstnumber / secondnumber;
    }
    x.value = result;
    return;
}
