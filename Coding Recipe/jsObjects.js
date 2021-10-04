// Given an array find the unique items in the array
// Given a string print the number of times each character appears

var items = ["a", "b", "c", "a", "e", "f"];

var data = {};

for (var i = 0; i < items.length; i++) {
    var keyValue = items[i];
    data[keyValue] = "x"


}

console.log(Object.keys(data));


var string = "hkhljfhladshofklklajfjofjonvm";

var words = {};

for (var i = 0; i < string.length; i++) {
    var word = string[i];
    if (words[word] == undefined) {
        words[word] = 1;
    } else {
        var prev = words[word];
        words[word] = prev + 1
    }
}

console.log(words);