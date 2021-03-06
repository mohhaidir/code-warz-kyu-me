/*
In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. 
For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.

Write a function to calculate factorial for a given input. 
If input is below 0 or above 12 throw an exception of type ArgumentOutOfRangeException (C#) or IllegalArgumentException (Java) or RangeException (PHP) or throw a RangeError (JavaScript) or ValueError (Python).

More details about factorial can be found here.
*/

function factorial(n) {
    // Calculate the factorial here
    console.log(n)
    if (!(n >= 0 && n <= 12)) { // <<-- statement range for throw range error
        throw new RangeError("The argument must be between 0 and 12."); // <<-- argument

    } else {
        let result = 1
        for (let i = 2; i <= n; i++) {
            result *= i
        }
        return result
    }
}
// <<<=== best solution, range error and recursive ===>>>
/*
function factorial(n) {
    if (n < 0 || n > 12)
        throw new RangeError();
    return n <= 1 ? 1 : n * factorial(n - 1);
}
*/

// <<<=== 2nd solution, try catch method, range error and recursive ===>>>
/*
function factorial(n) {
    // Calculate the factorial here
    try {
        if (n < 0) throw new RangeError();
    } catch (e) {
        console.log('Out of range!');
    }
    if (n === 0) return 1;
    return n * factorial(n - 1);
}
*/
console.log(factorial(0), 1, "factorial for 0 is 1");
console.log(factorial(1), 1, "factorial for 1 is 1");
console.log(factorial(2), 2, "factorial for 2 is 2");
console.log(factorial(3), 6, "factorial for 3 is 6");
console.log(factorial(-1), 1, "RangeError: The argument must be between 0 and 12.");
console.log(factorial(22), 1, "RangeError: The argument must be between 0 and 12.");