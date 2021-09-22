var smallLetter = "abcdefghijklmnopqrstuvwxyz";
var data = {};
var N = 5;
var count = N;
 for(var i = 0; i < smallLetter.length; i++) {
    var k= smallLetter[i]
    data[k] = count
    count++
}
for(k in data){
    console.log(k + "-" + data[k]);

}
