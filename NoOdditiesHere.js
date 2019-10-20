/*
Write a small function that returns the values of an array that are not odd.

All values in the array will be integers. Return the good values in the order they are given.
*/

function noOdds(values) {
    console.log(values)
    let res = []
    for (let i = 0; i < values.length; i++) {
        if (values[i] == 0) {
            res.push(values[i])
        } else if (values[i] % 2 == 0) {
            res.push(values[i])
        }
    }
    return res
}

console.log(noOdds([0, 1]), [0])
console.log(noOdds([0, 2]), [0, 1, 2, 3])