/*
Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

Notes:

Only lower case letters will be used (a-z). No punctuation or digits will be included.
Performance needs to be considered
Input strings s1 and s2 are null terminated.
Examples
scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False
*/

function scramble(str1, str2) {
    //code me
    // console.log(str1) 
    // console.log(str2, '====>>>>>')
    str1 = str1.split('')
    str2 = str2.split('')

    for (let i = 0; i < str2.length; i++) {
        let found = false
        for (let j = 0; j < str1.length; j++) {
            if (str2[i] == str1[j]) {
                str2[i] = -1
                str1[j] = -1
                found = true
                break
            }
        }
        if (found == false) {
            return false
        }
    }
    return true
}

console.log(scramble('scriptjavx', 'javascript'), false);
console.log(scramble('rkqodlw', 'world'), true);
console.log(scramble('cedewaraaossoqqyt', 'codewars'), true);
console.log(scramble('katas', 'steak'), false);
console.log(scramble('scriptjava', 'javascript'), true);
console.log(scramble('scriptingjava', 'javascript'), true);
console.log(scramble('scriptsjava', 'javascripts'), true);
console.log(scramble('jscripts', 'javascript'), false);
console.log(scramble('aabbcamaomsccdd', 'commas'), true);