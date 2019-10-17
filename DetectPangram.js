/*
A pangram is a sentence that contains every single letter of the alphabet at least once. 
For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
*/

function isPangram(string) {
    //...
    string = string.toLowerCase().split(' ').join('').split('.').join('')

    let alpha = 'abcdefghijklmnopqrstuvwxyz'

    for (let i = 0; i < alpha.length; i++) {
        let status = false
        for (let j = 0; j < string.length; j++) {
            if (alpha[i] == string[j]) {
                status = true
            }
        }
        if (status == false) {
            return status
        }
    }
    return true
}

console.log(isPangram("The quick brown fox jumps over the lazy dog."), true)
console.log(isPangram("This is not a pangram."), false)
console.log(isPangram("Cwm fjord bank glyphs vext quiz"), true)
console.log(isPangram("A pangram is a sentence that contains every single letter of the alphabet at least once."), false)
console.log(isPangram("Pack my box with five dozen liquor jugs."), true)
console.log(isPangram("How quickly daft jumping zebras vex."), true)