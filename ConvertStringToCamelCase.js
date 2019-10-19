/*
Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

Examples
toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"
*/
function toCamelCase(str) {
    if (str.length == 0) {
        return ''
    } else {
        let result = []
        let temp = ''
        for (let i = 0; i < str.length; i++) {
            if (str[i] != '-' && str[i] != '_') {
                temp += str[i]
            } else {
                result.push(temp)
                temp = ''
            }
        }
        result.push(temp)
        let string = ''
        for (let j = 0; j < result.length; j++) {
            for (let k = 0; k < result[j].length; k++) {
                j >= 1 && k == 0 ? string += result[j][0].toUpperCase() : string += result[j][k]
            }
        }
        return string
    }
}

console.log(toCamelCase('')) //, '', "An empty string was provided but not returned")
console.log(toCamelCase("the_stealth_warrior")) //, "theStealthWarrior", "toCamelCase('the_stealth_warrior') did not return correct value")
console.log(toCamelCase("The-Stealth-Warrior")) //, "TheStealthWarrior", "toCamelCase('The-Stealth-Warrior') did not return correct value")
console.log(toCamelCase("A-B-C")) //, "ABC", "toCamelCase('A-B-C') did not return correct value")