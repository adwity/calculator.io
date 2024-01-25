var expression = '';
var res = '';

function calculateResult() {
    try {
        const result = eval(expression);
        res = result.toString();
        displayResult();

    } catch (error) {
        res = 'Error';
        displayResult();
        expression = '';
        res = '';
    }
}

function buildExpression(x) {
    if (res == '') {
        expression = expression + x;
    }
    else {
        expression = res + x;
        res = ''
    }
    addToDisplay();
}
function clearInput() {
    expression = '';
    res = '';
    addToDisplay();
    displayResult();
}

function addToDisplay() {
    document.getElementById('inputDisplayContainer').innerHTML = expression;
}

function displayResult() {
    document.getElementById('outputDisplayContainer').innerHTML = res;

}