/*
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

eg:

validatePIN("1234") === true
validatePIN("12345") === false
validatePIN("a234") === false
*/
function validatePIN(pin) {
    let angka = pin
    let nums = '0123456789'
    let result = ''

    for (let i = 0; i < angka.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (angka[i] == nums[j]) {
                result += angka[i]
            }
        }
    }
    if (result.length == pin.length) {
        return (result.length == 4 || result.length == 6) ? true : false
    } else {
        return false
    }
}
console.log(validatePIN("1234"), true)
console.log(validatePIN("123456"), true)
console.log(validatePIN("1"), false, "Wrong output for '1'")
console.log(validatePIN("12"), false, "Wrong output for '12'")
console.log(validatePIN("123"), false, "Wrong output for '123'")
console.log(validatePIN("12345"), false, "Wrong output for '12345'")
console.log(validatePIN("1234567"), false, "Wrong output for '1234567'")
console.log(validatePIN("-1234"), false, "Wrong output for '-1234'")
console.log(validatePIN("1.234"), false, "Wrong output for '1.234'")
console.log(validatePIN("-1.234"), false, "Wrong output for '-1.234'")
console.log(validatePIN("00000000"), false, "Wrong output for '00000000'")