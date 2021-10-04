var smallLetter = "abcdefghijklmnopqrstuvwxyz";
var data = {};
var N = 5;
var str = "abc"
var count = N;
for (var i = 0; i < smallLetter.length; i++) {
    var k = smallLetter[i]
    data[k] = count
    count++
}
var sum = 0;


for (k in data) {
    for (var i = 0; i < str.length; i++) {
        if (str[i] == k) {
            sum = sum + data[k]

        }
    }

}
console.log(sum);