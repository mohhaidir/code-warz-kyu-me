/*
Check to see if a string has the same amount of 'x's and 'o's. 
The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/

function XO(str) {
    //code here
    str = str.toLowerCase()
    let x = []
    let o = []

    for (let i = 0; i < str.length; i++) {
        if (str[i] == 'x') {
            x.push(str[i])
        } else if (str[i] == 'o') {
            o.push(str[i])
        }
    }
    if (x.length == o.length) {
        return true
    } else if (x.length == 0 && o.length == 0) {
        return true
    } else {
        return false
    }
}

console.log(XO('xo'), true);
console.log(XO("xxOo"), true);
console.log(XO("xxxm"), false);
console.log(XO("Oo"), false);
console.log(XO("ooom"), false);