/*
Write function bmi that calculates body mass index (bmi = weight / height ^ 2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"
*/

function bmi(weight, height) {
    var bmi = weight / Math.pow(height, 2),
        message = 'Obese'

    if (bmi <= 18.5) {
        message = 'Underweight'
    } else if (bmi <= 25.0) {
        message = 'Normal'
    } else if (bmi <= 30.0) {
        message = 'Overweight'
    }
    return message
}

console.log(bmi(80, 1.80), "Normal");