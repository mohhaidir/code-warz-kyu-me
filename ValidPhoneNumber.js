/*
Write a function that accepts a string, and returns true if it is in the form of a phone number.
Assume that any integer from 0-9 in any of the spots will produce a valid phone number.

Only worry about the following format:
(123) 456-7890 (don't forget the space after the close parentheses)

Examples:

validPhoneNumber("(123) 456-7890")  =>  returns true
validPhoneNumber("(1111)555 2345")  => returns false
validPhoneNumber("(098) 123 4567")  => returns false
*/

function validPhoneNumber(phoneNumber) {
    //TODO: Return whether phoneNumber is in the proper form
    let num = phoneNumber.split("")

    for (i = 0; i < num.length; i++) {
        if (num[0] === "(" &&
            Number.isInteger(~~num[1]) === true &&
            Number.isInteger(~~num[2]) === true &&
            Number.isInteger(~~num[3]) === true &&
            num[4] === ")" &&
            Number.isInteger(~~num[5]) === true &&
            Number.isInteger(~~num[6]) === true &&
            Number.isInteger(~~num[7]) === true &&
            Number.isInteger(~~num[8]) === true &&
            num[9] === "-" &&
            Number.isInteger(~~num[10]) === true &&
            Number.isInteger(~~num[11]) === true &&
            Number.isInteger(~~num[12]) === true &&
            Number.isInteger(~~num[13]) === true &&
            phoneNumber.length === 14) {
            return true
        } else {
            return false
        }
    }
}
// <<<=== add new solution with regex ===>>>
/*
function validPhoneNumber(phoneNumber) {
    return /^\(\d{3}\) \d{3}\-\d{4}$/.test(phoneNumber);
}
*/

console.log(validPhoneNumber("(123) 456-7890"), true);