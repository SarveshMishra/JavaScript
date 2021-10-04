  //Print the number of vowels, and number of consonants, present in the string stored instr


  var N = 7;
  var str = "sarvesh";
  var vowels = "aeiou";
  var haveVowels = 0;
  var haveConsonant = 0;

  for (var i = 0; i < N; i++) {

    for (j = 0; j < vowels.length; j++) {

      if (str[i] == vowels[j]) {

        haveVowels++;

      }

    }

  }
  console.log(haveVowels, +(N - haveVowels))