/*
Write a function

tripledouble(num1,num2)
which takes numbers num1 and num2 and returns 1 if there is a straight triple of a number at any place in num1 and also a straight double of the same number in num2.

If this isn't the case, return 0

Examples
tripledouble(451999277, 41177722899) == 1 // num1 has straight triple 999s and 
                                          // num2 has straight double 99s

tripledouble(1222345, 12345) == 0 // num1 has straight triple 2s but num2 has only a single 2

tripledouble(12345, 12345) == 0

tripledouble(666789, 12345667) == 1
*/
function tripledouble(num1, num2) {
    //code me
    console.log(num1)
    console.log(num2)

    num1 = num1.toString().split('')
    num2 = num2.toString().split('')

    // let check1 = []
    let output1 = []
    let res1 = []
    for (let i = 0; i < num1.length; i++) {
        if (num1[i] == num1[i + 1] && num1[i + 1] == num1[i + 2]) {
            res1.push(num1[i], num1[i + 1], num1[i + 2])
            // check1.push(num1[i])
            num1[i] = -1
            num1[i + 1] = -1
            num1[i + 2] = -1
        } else {
            if (res1.length != 0) {
                output1.push(res1)
            }
            res1 = []
        }
    }
    if (res1.length != 0) {
        output1.push(res1)
    }
    // let check2 = []
    let output2 = []
    let res2 = []
    for (let j = 0; j < num2.length; j++) {
        if (num2[j] == num2[j + 1]) {
            res2.push(num2[j], num2[j + 1])
            // check2.push(num2[j])
            num2[j] = -1
            num2[j + 1] = -1
        } else {
            if (res2.length != 0) {
                output2.push(res2)
            }
            res2 = []
        }
    }
    if (res2.length != 0) {
        output2.push(res2)
    }
    // console.log(output1)
    // console.log(output2)

    for (let m = 0; m < output1.length; m++) {
        let found = false
        for (let n = 0; n < output2.length; n++) {
            if (output1[m][0] == output2[n][0]) {
                found = true
            }
        }
        if (found == true) {
            return 1
        }
    }
    return 0
}
// <<<=== best solution ===>>>
/*
function tripledouble(num1, num2) {
    for (let i = 0; i < 10; i++) {
        if (new RegExp(`${i}{3}`).test(num1) && new RegExp(`${i}{2}`).test(num2)) {
            return 1;
        }
    }
    return 0;
}
*/
console.log(tripledouble(451999277, 41177722899), 1);
console.log(tripledouble(1222345, 12345), 0);
console.log(tripledouble(12345, 12345), 0);
console.log(tripledouble(666789, 12345667), 1);
console.log(tripledouble(10560002, 100), 1);
console.log(tripledouble(1112, 122), 0);