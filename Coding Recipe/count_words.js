// Given a string count the number of words in that string

var given_strings = "Hello World!";

var words = 1;

if (given_strings.length === 0) {
  words = 0;

} else {

  for (var i = 0; i < given_strings.length; i++) {

    if (given_strings[i] === " ") {
      words++;


    }
  }

}

if (words != 0) {
  console.log(words)
} else {
  console.log("No Words")
}