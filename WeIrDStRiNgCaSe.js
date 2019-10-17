/*
Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased.

The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

Examples:
toWeirdCase( "String" );//=> returns "StRiNg"
toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"
*/

function toWeirdCase(string) {
    //TODO
    let str = string.split(' ')
    let temp = ''
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < str[i].length; j++) {
            j % 2 == 0 ? temp += str[i][j].toUpperCase() : temp += str[i][j]
        }
        str[i + 1] != undefined ? temp += ' ' : 0
    }
    return temp
}

console.log(toWeirdCase('This'), 'ThIs');
console.log(toWeirdCase('is'), 'Is');
console.log(toWeirdCase('This is a test'), 'ThIs Is A TeSt');
console.log(toWeirdCase('This is the final test case'), '\nThIs Is ThE FiNaL TeSt CaSe')