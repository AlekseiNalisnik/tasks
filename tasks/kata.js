function expand(expr) {
    function getCoefficient(n, k, i) {
        let coefficient = (getFactorial(n) * ((+a) ** i) * ((+b) ** k)) / (getFactorial(k) * getFactorial(n - k));
        return (coefficient === 1) ? '' : (coefficient === -1) ? '-' : coefficient.toFixed(0);
    }
    
    function getFactorial(num) {
        return (num > 1) ? (num * getFactorial(num - 1)) : 1;
    }
    
    function addSign() {
        if (sign === '-') {
            if (signCounter & 1) {
                result += term + '+';
            } else {
                result += term + '-';
            }
            signCounter++;
        } else {
            result += term + '+';
        }
    }

    function removeEndSign() {
        result = (
            result[result.length - 1] === '+' ||
            result[result.length - 1] === '-'
        ) ? result.slice(0, result.length - 1) : result;
    }

    function replacePowers() {
        result = result.slice(0, result.lastIndexOf('^1')) +
            result.slice(result.lastIndexOf('^1') + 2, result.length);
        let lastSign = result.slice(result.indexOf('^0') - 2, result.indexOf('^0') - 1);
        result = result.replace(
            result.slice(result.indexOf('^0') - 1, result.indexOf('^0') + 2),
            (lastSign === '+' || lastSign === '-') ? '1' : ''
        );
    }

    function replaceDuplicateSign() {
        result = result.split('+-').join('-');
        result = result.split('-+').join('-');
        result = result.split('--').join('+');
        result = result.split('++').join('+');
    }

    let result = '';
    let signCounter = 0;
    let term = '';
    const power = expr.slice(expr.indexOf('^') + 1, expr.length);
    const variable = expr.slice(expr.search(/[A-Za-z]/), expr.search(/[A-Za-z]/) + 1);
    const sign = expr.slice(expr.search(/[A-Za-z]/) + 1, expr.search(/[A-Za-z]/) + 2);
    let a = expr.slice(expr.indexOf('(') + 1, expr.indexOf(variable));
    let b = expr.slice(expr.lastIndexOf(sign) + 1, expr.indexOf(')'));
    a = (a === '-') ? '-1' : (a === '') ? '1' : a;
    b = b ? b : '0';

    if (power < 1) {
        return '1';
    }

    if (b === '0') {
        result = `${(a ** power === 1) ? '' : a ** power}${variable}^${power}`;
        removeEndSign();
        replaceDuplicateSign();

        return result;
    }

    for(let i = power, k = 0; i >= 0, k <= power; i--, k++) {
        let coefficient = getCoefficient(power, k, i);
        term = coefficient + variable + '^' + i;
        addSign();
    }

    removeEndSign();
    replacePowers();
    replaceDuplicateSign();
  
    return result;
}


// console.log(expand("(x+1)^2"));
// console.log(expand("(p-1)^3"));
// console.log(expand("(2f-4)^6"));
// console.log(expand("(-2a-4)^0"));
// console.log(expand("(-12t+43)^2"));
// console.log(expand("(r+0)^203"));
// console.log(expand("(-x-1)^2"));
// console.log(expand("(5m-3)^4"));
// console.log(expand("(-5m+3)^4"));
console.log(expand("(9t+0)^2"));
