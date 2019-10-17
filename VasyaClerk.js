/*
The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollar bill. An "Avengers" ticket costs 25 dollars.

Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

Can Vasya sell a ticket to every person and give change if he initially has no money and sells the tickets strictly in the order people queue?

Return YES, if Vasya can sell a ticket to every person and give change with the bills he has at hand at that moment. Otherwise return NO.

Examples:
tickets([25, 25, 50]) // => YES 
tickets([25, 100]) // => NO. Vasya will not have enough money to give change to 100 dollars
tickets([25, 25, 50, 50, 100]) // => NO. Vasya will not have the right bills to give 75 dollars of change (you can't make two bills of 25 from one of 50)
*/

function tickets(peopleInLine) {
    let changeIn25 = 0
    let changeIn50 = 0
    for (let i = 0; i < peopleInLine.length; i++) {
        let payment = peopleInLine[i]
        if (payment == 100) {
            if (changeIn25 < 75 && changeIn50 < 50) {
                return "NO"
            } else if (changeIn50 >= 50 && changeIn25 >= 25) {
                changeIn50 -= 50
                changeIn25 -= 25
            } else if (changeIn25 >= 75) {
                changeIn25 -= 75
            }
        } else if (payment == 50) {
            if (changeIn25 == 0) {
                return "NO"
            } else {
                changeIn25 -= 25
                changeIn50 += 50
            }
        } else if (payment == 25) {
            changeIn25 += 25
        }
    }
    return "YES"
}

/*
function tickets(peopleInLine) {
    let [c25, c50, c100] = [0, 0, 0];
    for (let v of peopleInLine) {
        if (v === 25) c25++;
        if (v === 50) {
            c50++;
            c25--;
        }
        if (v === 100) {
            c25--;
            c50 > 0 ? c50-- : c25 -= 2;
        }
        if (c25 < 0 || c50 < 0) return 'NO'
    }
    return 'YES'
}
*/
console.log(tickets([25, 25, 50, 50]), "YES");
console.log(tickets([25, 100]), "NO");
console.log(tickets([25, 25, 25, 25, 25, 25, 25, 50, 50, 50, 100, 100, 100, 100]), 'NO')
console.log(tickets([25, 25, 50, 100, 25, 25, 25, 100, 25, 25, 25, 100]), 'YES')
console.log(tickets([25, 25, 25, 100, 25, 50, 25, 100, 25, 50, 25, 100, 25, 25, 50, 100, 25, 25, 50, 100]), 'YES');
console.log(tickets([25, 50, 25, 100, 25, 25, 50, 100, 25, 25, 25, 100, 25, 50, 25, 100]), "YES");