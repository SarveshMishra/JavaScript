var str = "!@#$%^&*"
var data = {};
var N = 5;
var count = N;
 for(var i = 0; i < str.length; i++) {
    var k= str[i]
    data[k] = count
    count++
}
for(k in data){
    console.log(k + "-" + data[k]);

}
