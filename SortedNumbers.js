/*
Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

For example:

solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
solution(null); // should return []
*/

function solution(nums) {
    if (nums == null) {
        return []
    } else {
        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[i] > nums[j]) {
                    let temp = nums[j]
                    nums[j] = nums[i]
                    nums[i] = temp
                }
            }
        }
        return nums
    }
}
// <<<=== another solution ===>>>
/*
function solution(nums) {
    return nums !== null ? nums.sort(function (a, b) {
        return a - b
    }) : [];
}
*/
console.log(solution(null), '[]')
console.log(solution([]), '[]')
console.log(solution([20, 2, 10]), '[2, 10, 20]')
console.log(solution([2, 20, 10]), '[2, 10, 20]')
console.log(solution([1, 2, 3, 10, 5]), '[1, 2, 3, 5, 10]')