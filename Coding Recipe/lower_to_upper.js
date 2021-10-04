// Given a string in lower case convert it to upper case

var given_strings = "abcd";

var lower_case = "abcdefghijklmnopqrstuvwxyz";
var upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var pattern = "";
for (var i = 0; i < given_strings.length; i++) {

  if (given_strings[i] === lower_case[i]) {

    pattern = pattern + upper_case[i];



  }


}

console.log(pattern)