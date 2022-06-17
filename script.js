function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(a, b, operator) {
    if (operator === '+') {
        add(a, b);
    } else if (operator === '-') {
        subtract(a, b);
    } else if (operator === '*') {
        multiply(a, b);
    } else {
        divide(a, b);
    }
}

const display = document.querySelector('#display');
let displayValue = '';
const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', function(e) {
    display.textContent += e.target.innerText;
    displayValue = displayValue.concat(e.target.innerText);
    console.log(displayValue);
})
)