/*
The main idea is to count all the occuring characters(UTF-8) in string. If you have string like this aba then the result should be { 'a': 2, 'b': 1 }

What if the string is empty ? Then the result should be empty object literal { }

For C#: Use a Dictionary<char, int> for this kata!
*/

function count(string) {
    // The function code should be here
    let result = {}
    let str = string.split('').sort()
    for (let i = 0; i < str.length; i++) {
        (result[str[i]] == undefined) ? result[str[i]] = 1: result[str[i]]++
    }
    return result
}

console.log(count("aba"), ' ===>>> ', {
    a: 2,
    b: 1
})
console.log(count(""), ' ===>>> ', {})
console.log(count("aaaaaaaaaaaaaaaabbbbb"), ' ===>>> ', {
    a: 16,
    b: 5
})
console.log(count("abacajaj"), ' ===>>> ', {
    a: 4,
    b: 1,
    c: 1,
    j: 2
})