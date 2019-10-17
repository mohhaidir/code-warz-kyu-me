/*
Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

Examples
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""
*/

function order(words) {
    // ...
    words = words.split(' ')
    let result = []
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words[i].length; j++) {
            if (Number(Number(words[i][j]) == Number(words[i][j]))) {
                result.push([words[i], Number(words[i][j])])
            }
        }
    }
    for (let i = 0; i < result.length; i++) {
        for (let j = i + 1; j < result.length; j++) {
            if (result[i][1] > result[j][1]) {
                let temp = result[j]
                result[j] = result[i]
                result[i] = temp
            }
        }
    }

    let hasil = ''
    for (let k = 0; k < result.length; k++) {
        if (k != result.length - 1) {
            hasil += result[k][0] + ' '
        } else {
            hasil += result[k][0]
        }
    }
    return hasil
}

console.log(order("is2 Thi1s T4est 3a"), '====>', "Thi1s is2 3a T4est")
console.log(order("4of Fo1r pe6ople g3ood th5e the2"), '====>', "Fo1r the2 g3ood 4of th5e pe6ople")
console.log(order(""), '====>', "")
console.log(order('d4o dru7nken sh2all w5ith s8ailor wha1t 3we a6'), '====>', 'wha1t sh2all 3we d4o w5ith a6 dru7nken s8ailor')
console.log(order('Fi5ona Jami7la Ali6ce Cind4y Heid3i 2Greg Ig1or'), '====>', 'Ig1or 2Greg Heid3i Cind4y Fi5ona Ali6ce Jami7la')