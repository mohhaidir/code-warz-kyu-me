/*
Create a function taking a positive integer as its parameter and returning a string containing the Roman Numeral representation of that integer.

Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. 
In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 
1666 uses each Roman symbol in descending order: MDCLXVI.

Example:

solution(1000); // should return 'M'
Help:

Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000
Remember that there can't be more than 3 identical symbols in a row.

More about roman numerals - http://en.wikipedia.org/wiki/Roman_numerals
*/

function solution(number) {
    // convert the number to a roman numeral
    let value = 0
    let romanStr = ''
    let roman = [{
        M: 1000
    }, {
        CM: 900
    }, {
        D: 500
    }, {
        CD: 400
    }, {
        C: 100
    }, {
        XC: 90
    }, {
        L: 50
    }, {
        XL: 40
    }, {
        X: 10
    }, {
        IX: 9
    }, {
        V: 5
    }, {
        IV: 4
    }, {
        I: 1
    }]
    for (let i = 0; i < roman.length; i++) {
        for (let key in roman[i]) {
            while (value + roman[i][key] <= number) {
                value += roman[i][key]
                romanStr += key
            }
        }
    }
    return romanStr
}

console.log(solution(1), 'I', '1 should, "I"')
console.log(solution(2), 'II', '2 should, "II"')
console.log(solution(3), 'III', '3 should, "III"')
console.log(solution(4), 'IV', '4 should, "IV"')
console.log(solution(5), 'V', '5 should, "V"')
console.log(solution(9), 'IX', '9 should, "IX"')
console.log(solution(10), 'X', '10 should, "X"')
console.log(solution(11), 'XI')
console.log(solution(19), 'XIX')
console.log(solution(22), 'XXII')
console.log(solution(15), 'XV')
console.log(solution(1000), 'M', '1000 should, "M"')
console.log(solution(1001), 'MI', '1001 should, "MI"')
console.log(solution(1990), 'MCMXC', '1990 should, "MCMXC"')
console.log(solution(2007), 'MMVII', '2007 should, "MMVII"')
console.log(solution(2008), 'MMVIII', '2008 should, "MMVIII"')