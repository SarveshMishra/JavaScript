var N = 5;
var str = "naman"
var reverse = "";
var checked = false;

for (var i = (N - 1); i >= 0; i--) {

  reverse = reverse + str[i];

}


for (var j = 0; j < N; j++) {


  if (reverse[j] != str[j]) {
    checked = true;

  }

}



if (!checked) {
  console.log("Yes")
} else {
  console.log("No")
}