var s = "A Transformation in education";
var reverseOutput = [];

var arr = s.split(" ");
var n = arr.length-1

for(var i=n ; i >= 0; i--) {
    reverseOutput.push(arr[i]); 

}
var output = "";
for (var i = 0; i < reverseOutput.length; i++) {
        if (i === reverseOutput.length - 1) {
            output += reverseOutput[i]

            break;
        }
        output += reverseOutput[i] + " ";


}



console.log(output)