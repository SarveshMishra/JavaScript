
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


console.log(trimStart("      I am a being trimmed from starting space"))