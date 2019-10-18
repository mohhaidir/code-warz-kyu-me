/*
A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.

###Arguments (Haskell)

First argument: space-delimited list of minor words that must always be lowercase except for the first word in the string.
Second argument: the original string to be converted.
###Arguments (Other languages)

First argument (required): the original string to be converted.
Second argument (optional): space-delimited list of minor words that must always be lowercase except for the first word in the string. The JavaScript/CoffeeScript tests will pass undefined when this argument is unused.
###Example

titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
titleCase('the quick brown fox') // should return: 'The Quick Brown Fox'
*/

function titleCase(title, minorWords) {
    let judul = title.toLowerCase().split(' ') // title
    let kata = [] // minorWords
    let str = ''

    if (minorWords != undefined) {
        for (let i = 0; i < minorWords.length; i++) {
            if (minorWords[i] != ' ') {
                str += minorWords[i].toLowerCase()
            } else {
                kata.push(str)
                str = ''
            }
        }
        kata.push(str)
        // ====> proses memisahkan dan me-lowercase parameter kedua
    } else {
        kata = []
    }
    let result = []
    let string = ''
    for (let i = 0; i < judul.length; i++) {
        for (let j = 0; j < judul[i].length; j++) {
            if (j == 0) {
                string += judul[i][j].toUpperCase()
            } else if (j != 0) {
                string += judul[i][j]
            }
        }
        if (judul[i + 1] != undefined) {
            string += ' '
        }
    }
    result.push(string)
    // console.log(result, '=RESULT=>')
    // console.log(kata, '=KATA=>')
    result = result.join('').split(' ')
    let hasil = []
    for (let i = 0; i < result.length; i++) {
        let found = false
        for (let j = 0; j < kata.length; j++) {
            if (result[i].toLowerCase() == kata[j] && i != 0) {
                found = true
                hasil.push(kata[j])
            }
        }
        if (!found) { // (found == false)
            hasil.push(result[i])
        }
    }
    return hasil.join(' ')
}

/*
  if (typeof minorWords !== "undefined") {    // NOTE A
    var minorWords = minorWords.toLowerCase().split(' ');
  } else {
    var minorWords = []; // this will return an empty array if no 2nd argument was passed through
  }
  
  return title.toLowerCase().split(' ').map(function(word, i) {
    if (word != "" && ((minorWords.indexOf(word) === -1) || i == 0)) {
      word = word.split('');
      word[0] = word[0].toUpperCase();
      word = word.join('');
    }
    return word;
  }).join(' ');
*/

console.log(titleCase(''), '')
console.log(titleCase('a clash of KINGS', 'a an the of'), 'A Clash of Kings')
console.log(titleCase('THE WIND IN THE WILLOWS', 'The In'), 'The Wind in the Willows')
console.log(titleCase('the quick brown fox'), 'The Quick Brown Fox')