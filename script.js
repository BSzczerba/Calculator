let numbers = [];
let operators = [];
const output = document.getElementById("output");
function AddNumber(number) {
    if (numbers.length != operators.length) {
        if (number == '.')
        {
            if (isFloat(Number(numbers[numbers.length - 1])))
            {
                numbers[numbers.length - 1] += number.toString();
            }           
        }
        else
        {
            numbers[numbers.length - 1] += number.toString();
        }       
    }
    else 
    {
        if (number == '.') {
            numbers.push("0.")
        }
        else
        {
            numbers.push(number.toString());
        }       
    }
    Update();
}
function isFloat(n) {
    return Number(n) === n && n % 1 === 0;
}
function AddOperator(operator) {
    if (numbers.length > operators.length) {
        operators.push(operator.toString());
    }
    Update();
}
function Calculate() {
    let result = parseFloat(0);
    let list = [];
    if (numbers.length == operators.length)
    {
        operators.pop();
    }
    for (let i = 0; i < operators.length; i++)
    {       
        switch (operators[i]) {
            case '*':
                list.push(Multiplication(parseFloat(numbers[i]), parseFloat(numbers[i + 1])));
                break;
            case '/':
                 list.push(Division(parseFloat(numbers[i]), parseFloat(numbers[i + 1])));              
                 break;
            default:
                list.push(numbers[i]); list.push(operators[i]);
                break;
        }
    }
    list.push(numbers[numbers.length - 1]);
    result = list[0];
    for (let i = 0; i < list.length; i++)
    {
        switch (list[i]) {
            case '+':
                result = Addition(parseFloat(result), parseFloat(list[i + 1]));
                break;
            case '-':
                result = Subtraction(parseFloat(result), parseFloat(list[i + 1]));
                break;
            default: break;
        }
    }
    output.value = result.toString();
    numbers = [result.toString()];
    operators = [];
}
function Clear()
{
    output.value = "";
    numbers = [];
    operators = [];
}
function Change()
{
    numbers[numbers.length - 1] *= -1;
    Update();
}
function Update() {
    let list = "";
    let n = 0;
    let o = 0;
    for (let i = 0; i < operators.length+numbers.length; i++) {
        if (i % 2 == 0) {
            list += numbers[n];
            n++;
        }
        else
        {
            list += operators[o];
            o++;
        }
    }
    output.value = list;
}

function Addition(x,y)
{
    return x + y;
}
function Multiplication(x,y)
{
    return x * y;
}
function Subtraction(x, y) {
    return x - y;
}
function Division(x, y) {
    if (y != 0) {
        return x / y;
    }
    else
    {
        return "You cannot divide by zero.";
    }    
}