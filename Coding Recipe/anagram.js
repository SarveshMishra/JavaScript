var S1 = "finale";
var S2 = "fa li ne";

    //write code here

var count = 0;
function trimStart(str) {

    var lower_case = "abcdefghijklmnopqrstuvwxyz";
    var upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var pattern = "";
   
    for (var i = 0; i < str.length; i++) {
        for (var j = 0; j < 26; j++) {

            if (str[i] === upper_case[j] || str[i] === lower_case[j]) {
                pattern += str[i];
            }
            
            if (str[i] === " "){
                
            }
            

        }


    }
    return pattern
}

S1 = trimStart(S1);
S2 = trimStart(S2);


for (var i = 0; i < S1.length; i++) {

    for (var j = 0; j < S2.length; j++) {
        if (S1[i] == S2[j]) {
            count++;
            break;
        }
    }

}


if ((count == S1.length) && (count == S2.length)) {
    console.log("True")
} else {
    console.log("False")
}

