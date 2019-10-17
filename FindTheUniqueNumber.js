/*
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains more than 3 numbers.

The tests contain some very huge arrays, so think about performance.

This is the first kata in series:

-Find the unique number (this kata)
-Find the unique string
-Find The Unique
*/

function findUniq(arr) {
    // do magic
    let unique = []
    for (let i = 0; i < arr.length; i++) {
        let found = false
        for (let j = 0; j < unique.length; j++) {
            if (arr[i] == unique[j][0]) {
                unique[j][1] += 1
                found = true
            }
        }
        if (found == false) {
            unique.push([arr[i], 1])
        }
    }
    for (let i = 0; i < unique.length; i++) {
        for (let j = i + 1; j < unique.length; j++) {
            if (unique[i][1] > unique[j][1]) {
                let temp = unique[j]
                unique[j] = unique[i]
                unique[i] = temp
            }
        }
    }
    return unique[0][0]
}

console.log(findUniq([0, 1, 0]), 1);
console.log(findUniq([1, 1, 1, 2, 1, 1]), 2);
console.log(findUniq([3, 10, 3, 3, 3]), 10);