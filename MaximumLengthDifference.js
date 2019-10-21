/*
You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

Find max(abs(length(x) − length(y)))

If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

#Example:

a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
mxdiflg(a1, a2) --> 13
Bash note:
input : 2 strings with substrings separated by ,
output: number as a string
*/

function mxdiflg(a1, a2) {
    // console.log(a1)
    // console.log(a2)

    // your code
    if (a1.length == 0 || a2.length == 0) {
        return -1
    }

    let max = 0
    for (let i = 0; i < a1.length; i++) {
        for (let j = 0; j < a2.length; j++) {
            if (Math.abs(a1[i].length - a2[j].length) > max) {
                max = Math.abs(a1[i].length - a2[j].length)
            }
        }
    }
    return max
}

var s1 = ['hoqq', 'bbllkw', 'oox', 'ejjuyyy', 'plmiis', 'xxxzgpsssa', 'xxwwkktt', 'znnnnfqknaz', 'qqquuhii', 'dvvvwz'];
var s2 = ['cccooommaaqqoxii', 'gggqaffhhh', 'tttoowwwmmww'];
console.log(mxdiflg(s1, s2), 13);

var s1 = ['ejjjjmmtthh', 'zxxuueeg', 'aanlljrrrxx', 'dqqqaaabbb', 'oocccffuucccjjjkkkjyyyeehh']
var s2 = ['bbbaaayddqbbrrrv']
console.log(mxdiflg(s1, s2), 10);

var s1 = ['ccct', 'tkkeeeyy', 'ggiikffsszzoo', 'nnngssddu', 'rrllccqqqqwuuurdd', 'kkbbddaakkk']
var s2 = ['tttxxxxxxgiiyyy', 'ooorcvvj', 'yzzzhhhfffaaavvvpp', 'jjvvvqqllgaaannn', 'tttooo', 'qmmzzbhhbb']
console.log(mxdiflg(s1, s2), 14);

var s1 = ['ggguuuhhho', 'aaaayyxxaaa', 'bbbxxfffll', 'rjjgzsss', 'rlllluccccqqxoooohhh', 'xjjjjjkkcccc']
var s2 = ['mmssluuyyyy']
console.log(mxdiflg(s1, s2), 9);