/*
Complete the solution so that the function will break up camel casing, using a space between words.

Example
solution('camelCasing') // => should return 'camel Casing'
*/

// complete the function

function solution(string) {
    console.log(string)
    var str = string.split('')
    for (var i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            str[i] = ' ' + str[i]
        }
    }
    return str.join('')
}

console.log(solution('camelCasing'), 'camel Casing')
console.log(solution('camelCasingTest'), 'camel Casing Test')