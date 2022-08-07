
function calculate(){
    let left = parseFloat(document.getElementById("leftOperand").value);
    let right = parseFloat(document.getElementById("rightOperand").value);
    let operator = document.getElementById("operator").value;
    let result = document.getElementById("result");

    switch(operator) {
        case '+':
            result.innerHTML = left + right;
            break;
        case '-':
            result.innerHTML = left - right;
            break;
        case '/':
            result.innerHTML = left / right;
            break;
        case '*':
            result.innerHTML = left * right;
            break;  
        case '%':
            result.innerHTML = left % right;
            break;
        case '^':
            result.innerHTML = Math.pow(left, right); 
            break;
        case 'Rand':
            if(left === right) {
                result.innerHTML = 'ERROR! Cannot generate random number with same numbers'
                break;
            }
            if(left > right) {
                let temp = right;
                right = left;
                left = temp;
            }
            result.innerHTML = 'Random number between '+ left + ' and ' + right + ": "+ Math.floor((Math.random() * right) + left);
            break;          
    }
}