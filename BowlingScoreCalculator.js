/*

*/

var bowlingScore = function (rolls) {
    //TODO: calculate score
    let totalScore = 0
    let totalFramesScored = 0
    let currentRoll = 0

    while (currentRoll < rolls.length && totalFramesScored < 10) {
        if (rolls[currentRoll] != 10) {
            const pins = rolls[currentRoll] + rolls[currentRoll + 1]
            if (pins !== 10) {
                totalScore += pins
            } else {
                totalScore += 10 + rolls[currentRoll + 2]
            }
            currentRoll += 2
        } else {
            totalScore += (10 + rolls[currentRoll + 1] + rolls[currentRoll + 2])
            currentRoll += 1
        }
        totalFramesScored++
    }
    return totalScore
}
// <<<=== add new solution ===>>>
/*
var bowlingScore = function (rolls) {
    var score = 0,
        i = 0,
        frame = 1;
    while (frame <= 10) {
        score += rolls[i] + rolls[i + 1];
        if (rolls[i] + rolls[i + 1] >= 10) score += rolls[i + 2];
        if (rolls[i] !== 10) i++;
        i++;
        frame++;
    }
    return score;
}
*/
console.log(0 == bowlingScore([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]))
console.log(190 == bowlingScore([9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9]))
console.log(300 == bowlingScore([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]))
console.log(11 == bowlingScore([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 1, 0]))
console.log(12 == bowlingScore([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 1, 0]))