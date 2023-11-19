function calculate(event) {
    event.preventDefault();

    var number1 = document.getElementById('number1').value;
    var number2 = document.getElementById('number2').value;
    var sign = document.getElementById('sinais').value;

    var result = 0;

    switch (sign) {
        case '+':
            result = parseFloat(number1) + parseFloat(number2);
            break;
        case '-':
            result = parseFloat(number1) - parseFloat(number2);
            break;
        case '*':
            result = parseFloat(number1) * parseFloat(number2);
            break;
        case '/':
            result = parseFloat(number1) / parseFloat(number2);
            break;
    }
    document.getElementById('result').innerHTML = 'Resultado: ' + result;

}
