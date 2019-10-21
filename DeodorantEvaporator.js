/*
This program tests the life of an evaporator containing a gas.
We know the content of the evaporator (content in ml), the percentage of foam or gas lost every day (evap_per_day) and the threshold (threshold) in percentage beyond which the evaporator is no longer useful. 
All numbers are strictly positive.
The program reports the nth day (as an integer) on which the evaporator will be out of use.

Note : Content is in fact not necessary in the body of the function "evaporator", you can use it or not use it, as you wish. 
Some people might prefer to reason with content, some other with percentages only. 
It's up to you but you must keep it as a parameter because the tests have it as an argument.
*/

function evaporator(content, evap_per_day, threshold) {
    console.log(content)
    console.log(evap_per_day)
    console.log(threshold)
    let result = 0
    let percentage = 100
    while (percentage > threshold) {
        percentage = percentage - percentage * (evap_per_day / 100)
        result += 1
    }
    return result
}
Test.assertEquals(evaporator(10, 10, 10), 22);
Test.assertEquals(evaporator(10, 10, 5), 29);
Test.assertEquals(evaporator(100, 5, 5), 59);
Test.assertEquals(evaporator(50, 12, 1), 37);
Test.assertEquals(evaporator(100, 1, 1), 459);
Test.assertEquals(evaporator(10, 1, 1), 459);