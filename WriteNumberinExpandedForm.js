/*
Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.

If you liked this kata, check out part 2!!
*/

function expandedForm(num) {
    let digits = num.toString()
    let output = []

    for (let i = 0; i < digits.length; i++) {
        if (digits[i] > 0) {
            let zeros = ''
            for (let j = digits.length - i - 1; j > 0; j--) {
                zeros += '0'
            }
            output.push(digits[i] + zeros)
        }
    }
    return output.join(' + ')
}

console.log(expandedForm(12), '10 + 2');
console.log(expandedForm(42), '40 + 2');
console.log(expandedForm(70304), '70000 + 300 + 4');