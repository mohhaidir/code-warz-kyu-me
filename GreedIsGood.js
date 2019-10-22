/*
Greed is a dice game played with five six-sided dice. 
Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

 Three 1's => 1000 points
 Three 6's =>  600 points
 Three 5's =>  500 points
 Three 4's =>  400 points
 Three 3's =>  300 points
 Three 2's =>  200 points
 One   1   =>  100 points
 One   5   =>   50 point
A single die can only be counted once in each roll. 
For example, a "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

Example scoring

 Throw       Score
 ---------   ------------------
 5 1 3 4 1   50 + 2 * 100 = 250
 1 1 1 3 1   1000 + 100 = 1100
 2 4 4 5 4   400 + 50 = 450
In some languages, it is possible to mutate the input to the function. 
This is something that you should never do. If you mutate the input, you will not be able to pass all the tests.
*/

function score(dice) {
    // Fill me in!
    let score = 0
    const counts = [0, 0, 0, 0, 0, 0, 0]
    for (const value of dice) {
        counts[value]++
    }
    score += counts[1] < 3 ? counts[1] * 100 : 1000 + 100 * (counts[1] - 3)
    score += counts[2] >= 3 ? 200 : 0
    score += counts[3] >= 3 ? 300 : 0
    score += counts[4] >= 3 ? 400 : 0
    score += counts[5] < 3 ? counts[5] * 50 : 500 + 50 * (counts[5] - 3)
    score += counts[6] >= 3 ? 600 : 0

    return score
}

console.log(score([2, 3, 4, 6, 2]) /* == 0 */ , "Should be 0 :-(");
console.log(score([4, 4, 4, 3, 3]) /* == 400 */ , "Should be 400");
console.log(score([2, 4, 4, 5, 4]) /* == 450 */ , "Should be 450");