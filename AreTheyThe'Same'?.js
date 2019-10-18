/*
Given two arrays a and b write a function comp(a, b) (compSame(a, b) in Clojure) that checks whether the two arrays have the "same" elements, with the same multiplicities. "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

Examples
Valid arrays
a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:

a = [121, 144, 19, 161, 19, 144, 19, 11] 
b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
Invalid arrays
If we change the first number to something else, comp may not return true anymore:

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a,b) returns false because in b 132 is not the square of any number of a.

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
comp(a,b) returns false because in b 36100 is not the square of any number of a.

Remarks
a or b might be [] (all languages except R, Shell). a or b might be nil or null or None or nothing (except in Haskell, Elixir, C++, Rust, R, Shell, PureScript).

If a or b are nil (or null or None), the problem doesn't make sense so return false.

If a or b are empty then the result is self-evident.

a or b are empty or not empty lists.
*/

function comp(array1, array2) {
    //your code here
    if (array1 == null || array2 == null) {
        return false
    }
    if (array1.length == 0 && array2.length == 0) {
        return true
    }
    for (let i = 0; i < array2.length; i++) {
        let found = false
        for (let j = 0; j < array1.length; j++) {
            if (Math.sqrt(array2[i]) == array1[j]) {
                array2[i] = -1;
                array1[j] = -1;
                found = true;
                break;
            }
        }
        if (!found) {
            return false
        }
    }
    return true
}

a1 = [121, 144, 19, 161, 19, 144, 19, 11];
a2 = [11 * 11, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19];
console.log(comp(a1, a2), true);

a1 = [121, 144, 19, 161, 19, 144, 19, 11]
a2 = [231, 14641, 20736, 361, 25921, 361, 20736, 361]
console.log(comp(a1, a2), false);

a1 = [69, 98, 42, 4, 23, 60]
a2 = [4761, 9604, 1764, 16, 529, 3601]
console.log(comp(a1, a2), false);

a1 = [2, 2, 3]
a2 = [4, 9, 9]
console.log(comp(a1, a2), false);