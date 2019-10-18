/*
In this kata you need to build a function to return either true/True or false/False if a string can be seen as the repetition of a simpler/shorter subpattern or not.

For example:

hasSubpattern("a") === false; //no repeated pattern
hasSubpattern("aaaa") === true; //created repeating "a"
hasSubpattern("abcd") === false; //no repeated pattern
hasSubpattern("abababab") === true; //created repeating "ab"
hasSubpattern("ababababa") === false; //cannot be entirely reproduced repeating a pattern
Strings will never be empty and can be composed of any character (just consider upper- and lowercase letters as different entities) and can be pretty long (keep an eye on performances!).

If you liked it, go for the next kata of the series!
*/

function hasSubpattern(string) {
    //your code here
    let str = string.split('').sort()

    let output = []
    let temp = []
    for (let i = 0; i < str.length; i++) {
        if (temp.length == 0) {
            temp.push(str[i], 1)
        } else if (str[i] == str[i - 1]) {
            temp[1] += 1
        } else {
            output.push(temp)
            temp = []
            temp.push(str[i], 1)
        }
    }
    output.push(temp)

    // console.log(output)
    if (output.length == 1 && output[0][1] < 2) {
        return false
    } else if (output.length == 1 && output[0][1] >= 2) {
        return true
    } else {
        for (let i = 0; i < output.length - 1; i++) {
            var found = true
            if (output[i][1] != output[i + 1][1] || output[i][1] == 1) {
                found = false
            }
        }
        if (found == true) {
            return found
        } else {
            return false
        }
    }
}

console.log(hasSubpattern("a"), false);
console.log(hasSubpattern("aaaa"), true);
console.log(hasSubpattern("abcd"), false);
console.log(hasSubpattern("abababab"), true);
console.log(hasSubpattern("ababababa"), false);
console.log(hasSubpattern("123a123a123a"), true);
console.log(hasSubpattern("123A123a123a"), false);
console.log(hasSubpattern("abbaabbaabba"), true);
console.log(hasSubpattern("abbabbabba"), false);
console.log(hasSubpattern("abcdabcabcd"), false);