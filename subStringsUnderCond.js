// You are given a strings, you have to find the count of all such substrings which start and ends with the same character.


var s = "thisracecarisgood"


var count = 0;
for (var i = 0; i < s.length; i++) {
    for (var j = i + 1; j <= s.length; j++) {
        var out = "";
        for (var k = i; k < j; k++) {
            out += s[k]
        }
        if (out[0] === out[out.length - 1]) {
            count++
        }



    }
}

console.log(count)