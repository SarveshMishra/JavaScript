// The value of the alphabet a is 1,b is 2,c is 3..... till z is 26.

// Now you have to find the total value of the given string. The total value of a string is the sum of values of all characters present in string.

//input = aba output = 4

var alphabet = 'abcdefghijklmnopqrstuvwxyz'
var sum = 0;
var S = "azac"
for (var i = 0; i < S.length; i++) {
    for (var j = 0; j < alphabet.length; j++) {
        if (S[i] === alphabet[j]) {
            sum = sum + (j + 1);
        }

    }
}
console.log(sum);