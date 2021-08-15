var N = 6;
var str = "stvrgh"

var vowels = "aeiou";
var haveVowels = false;

for (var i = 0; i < N; i++) {
  for (j = 0; j < vowels.length; j++) {
    if (str[i] == vowels[j]) {

      haveVowels = true;
    }
  }

}
console.log(haveVowels)