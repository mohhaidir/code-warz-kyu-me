/*
The drawing shows 6 squares the sides of which have a length of 1, 1, 2, 3, 5, 8. It's easy to see that the sum of the perimeters of these squares is : 4 * (1 + 1 + 2 + 3 + 5 + 8) = 4 * 20 = 80

Could you give the sum of the perimeters of all the squares in a rectangle when there are n + 1 squares disposed in the same manner as in the drawing:

alternative text

#Hint: See Fibonacci sequence

#Ref: http://oeis.org/A000045

The function perimeter has for parameter n where n + 1 is the number of squares (they are numbered from 0 to n) and returns the total perimeter of all the squares.

perimeter(5)  should return 80
perimeter(7)  should return 216
*/

function perimeter(n) {
    let cal = [0]
    let formula = 1
    for (let i = 0; i <= n; i++) {
        cal.push(formula)
        formula = cal[cal.length - 2] + cal[cal.length - 1]
    }

    let result = 0
    for (let j = 0; j < cal.length; j++) {
        result += cal[j]
    }
    return result * 4
}

console.log(perimeter(0), 4)
console.log(perimeter(5), 80)
console.log(perimeter(7), 216)
console.log(perimeter(20), 114624)
console.log(perimeter(30), 14098308)