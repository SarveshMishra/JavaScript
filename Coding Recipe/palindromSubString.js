var S = "thisracecarisgood"

function palindrome(str) {
  var N = str.length;
  var reverse = "";
  var checked = true;

  for (var i = (N - 1); i >= 0; i--) {

    reverse = reverse + str[i];

  }


  for (var j = 0; j < N; j++) {


    if (reverse[j] != str[j]) {
      checked = false;

    }

  }



  return checked;
}


var palindromeStrLength = 0;
var count = 0;
for (var i = 0; i < S.length; i++) {
  for (var j = i + 1; j <= S.length; j++) {
    var output = "";
    for (var k = i; k < j; k++) {
      output += S[k]
    }



    if (palindrome(output) && (palindromeStrLength < output.length)) {
      palindromeStrLength = output.length;

    }

  }
}

console.log(palindromeStrLength)