/*
You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3
*/

function stray(numbers) {
    numbers = numbers.sort()
    // console.log(numbers)
    // console.log(numbers[numbers.length-1])
    var mid = Math.floor(numbers.length / 2)
    // console.log(numbers[mid])


    if (numbers[mid] == numbers[0]) {
        return numbers[numbers.length - 1]
    } else if (numbers[mid] != numbers[0]) {
        return numbers[0]
    }
}

console.log(stray([1, 1, 2]), 2)
console.log(stray([0, 1, 1, 1, 1, 1, 1]), 0)
console.log(stray([8, 1, 1, 1, 1, 1, 1]), 8)
console.log(stray([0, 0, 0, 7, 0, 0, 0]), 7)
console.log(stray([-21, -21, -21, -21, -6, -21, -21]), -6)
console.log(stray([8, 1, 1, 1, 1, 1, 1]), 8)