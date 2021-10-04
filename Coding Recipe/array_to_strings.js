// Given an array of string count the overall total number of characters

var arr = ["Hello", "World"];

var count = 0;
var words;

for (var i = 0; i < arr.length; i++) {

  words = arr[i];
  count = count + words.length;

}

console.log(count)