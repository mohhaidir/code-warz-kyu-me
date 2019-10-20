/*
Instructions
Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

Example
Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );
*/

var capitals = function (word) {
    // Write your code here
    let alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let result = []
    for (let i = 0; i < word.length; i++) {
        for (let j = 0; j < alpha.length; j++) {
            if (word[i] == alpha[j]) {
                result.push(i)
            }
        }
    }
    return result
}

console.log(capitals('CodEWaRs'), [0, 3, 4, 6]);
console.log(capitals('QbVCBgjyqD'), [0, 2, 3, 4, 9]);
console.log(capitals('vWyphKcqYH'), [1, 5, 8, 9]);
console.log(capitals('AHLiSRtXrM'), [0, 1, 2, 4, 5, 7, 9]);
console.log(capitals('JvlXfYtTeE'), [0, 3, 5, 7, 9]);
console.log(capitals('ObmsYfiqRD'), [0, 4, 8, 9]);