/*
Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

For instance:

"hello case".camelCase() => HelloCase
"camel case word".camelCase() => CamelCaseWord
Don't forget to rate this kata! Thanks :)
*/

function camelCase(str) {
    //your code here
    if (str.length == 0) {
        return ''
    } else {
        str = str.split(' ')
        let result = []
        for (let i = 0; i < str.length; i++) {
            let string = ''
            for (let j = 0; j < str[i].length; j++) {
                if (j == 0) {
                    string += str[i][j].toUpperCase()
                } else {
                    string += str[i][j]
                }
            }
            result.push(string)
        }
        return result.join('')
    }
}
/*
String.prototype.camelCase = function(){  
    return this.split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join('')
}
*/
console.log(camelCase("test case"), "TestCase");
console.log(camelCase("camel case method"), "CamelCaseMethod");
console.log(camelCase("say hello "), "SayHello");
console.log(camelCase(" camel case word"), "CamelCaseWord");
console.log(camelCase(""), "");