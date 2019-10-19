/*
Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

Example:

solution('XXI'); // should return 21
Help:

Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000
Courtesy of rosettacode.org
*/

function solution(roman) {
    // complete the solution by transforming the 
    // string roman numeral into an integer  
    var romanNumerals = {
        'M': 1000,
        'D': 500,
        'C': 100,
        'L': 50,
        'X': 10,
        'V': 5,
        'I': 1
    }
    roman = roman.split("")
    var m = 0
    let n = roman[0]
    roman.reduce(function (pre, item, index) {
        var j = romanNumerals[n] || 0
        var k = romanNumerals[item] || 0
        m += j < k ? -j : j
        n = item
    })
    return m + romanNumerals[roman[roman.length - 1]]
}

console.log(solution('XXI') == 21, 'XXI should == 21')
console.log(solution('I') == 1, 'I should == 1')
console.log(solution('IV') == 4, 'IV should == 4')
console.log(solution('MMVIII') == 2008, 'MMVIII should == 2008')
console.log(solution('MDCLXVI') == 1666, 'MDCLXVI should == 1666')