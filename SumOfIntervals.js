/*
Write a function called sumIntervals/sum_intervals() that accepts an array of intervals, and returns the sum of all the interval lengths. Overlapping intervals should only be counted once.

Intervals
Intervals are represented by a pair of integers in the form of an array. The first value of the interval will always be less than the second value. Interval example: [1, 5] is an interval from 1 to 5. The length of this interval is 4.

Overlapping Intervals
List containing overlapping intervals:

[
   [1,4],
   [7, 10],
   [3, 5]
]
The sum of the lengths of these intervals is 7. Since [1, 4] and [3, 5] overlap, we can treat the interval as [1, 5], which has a length of 4.

Examples:
sumIntervals( [
   [1,2],
   [6, 10],
   [11, 15]
] ); // => 9

sumIntervals( [
   [1,4],
   [7, 10],
   [3, 5]
] ); // => 7

sumIntervals( [
   [1,5],
   [10, 20],
   [1, 6],
   [16, 19],
   [5, 11]
] ); // => 19
*/

function sumIntervals(intervals) {
    //TODO
    let temporary = []
    for (let i = 0; i < intervals.length; i++) {
        for (let j = intervals[i][0]; j < intervals[i][1]; j++) {
            temporary.push(j)
        }
    }

    for (let k = 0; k < temporary.length; k++) {
        for (let l = k + 1; l < temporary.length; l++) {
            if (temporary[k] > temporary[l]) {
                let temp = temporary[l]
                temporary[l] = temporary[k]
                temporary[k] = temp
            }
        }
    }
    let counter = 0

    for (let m = 0; m < temporary.length; m++) {
        if (temporary[m] != temporary[m + 1]) {
            counter++
        }
    }
    return counter
}
// <<<=== another solution ===>>>
/*
function sumIntervals(intervals) {
    var retArr = [];
    for (i = 0; i < intervals.length; i++) {
        for (j = intervals[i][0] + 1; j <= intervals[i][1]; j++) {
            if (retArr.indexOf(j) == -1) retArr.push(j);
        }
    }
    return retArr.length;
}
*/
var test1 = [
    [1, 5]
]
var test2 = [
    [1, 5],
    [6, 10]
]
console.log(sumIntervals(test1), 4)
console.log(sumIntervals(test2), 8)

var test1 = [
    [1, 5],
    [1, 5]
]
var test2 = [
    [1, 4],
    [7, 10],
    [3, 5]
]
console.log(sumIntervals(test1), 4)
console.log(sumIntervals(test2), 7)