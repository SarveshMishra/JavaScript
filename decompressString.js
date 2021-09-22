// For instance, if the string isa3b2=> the output should be aaabb


var string = "a4b3a2"

var pattern = "";


for (var i = 0; i < string.length; i++) {



    if (typeof (string[i]) === "string") {

        for (var k = 0; k < string[i]; k++) {

            pattern += string[i - 1];

        }

    }



}
console.log(pattern);