/*
Your job is to create a calculator which evaluates expressions in Reverse Polish notation.

For example expression 5 1 2 + 4 * + 3 - (which is equivalent to 5 + ((1 + 2) * 4) - 3 in normal notation) should evaluate to 14.

For your convenience, the input is formatted such that a space is provided between every token.

Empty expression should evaluate to 0.

Valid operations are +, -, *, /.

You may assume that there won't be exceptional situations (like stack underflow or division by zero).
*/
function calc(expr) {
    // TODO: Your awesome code here
    let str = expr.split(' ')

    if (str == '') {
        return 0
    } else if (str.length == 1) {
        return Number(str.join(''))
    } else {
        let cal = []
        let num = []

        for (let i = 0; i < str.length; i++) {
            if (str[i] == '/' || str[i] == '+' || str[i] == '-' || str[i] == '*') {
                cal.push(str[i])
            } else {
                num.push(Number(str[i]))
            }
        }

        if (cal == '/') {
            let res1 = num[0]
            for (let j = 1; j < num.length; j++) {
                res1 /= num[j]
            }
            return res1
        } else if (cal == '*') {
            let res2 = num[0]
            for (let k = 1; k < num.length; k++) {
                res2 *= num[k]
            }
            return res2
        } else if (cal == '-') {
            let res3 = num[0]
            for (let l = 1; l < num.length; l++) {
                res3 -= num[l]
            }
            return res3
        } else if (cal == '+') {
            let res4 = num[0]
            for (let m = 1; m < num.length; m++) {
                res4 += num[m]
            }
            return res4
        }
    }
}

// <<<=== best solution ===>>>
/*
let exp = expr.split(' ');
let expStack = [];
let returnValue = 0;
for (let i in exp) {
    let val = exp[i];
    let num1;
    let num2;
    if (val == '+' || val == '-' || val == '*' || val == '/') {
        num1 = Number(expStack.pop());
        num2 = Number(expStack.pop());
    }
    switch (val) {
        case '+':
            expStack.push(num2 + num1);
            break;
        case '-':
            expStack.push(num2 - num1);
            break;
        case '*':
            expStack.push(num2 * num1);
            break;
        case '/':
            expStack.push(num2 / num1);
            break;
        default:
            if (val) expStack.push(val)
    }

}
return Number(expStack[0]) || 0;
*/
console.log(calc(""), 0, "Should work with empty string");
console.log(calc("3"), 3, "Should parse numbers");
console.log(calc("3.5"), 3.5, "Should parse float numbers");
console.log(calc("1 3 +"), 4, "Should support addition");
console.log(calc("1 3 *"), 3, "Should support multiplication");
console.log(calc("1 3 -"), -2, "Should support subtraction");
console.log(calc("4 2 /"), 2, "Should support division");