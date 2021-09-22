/*Write a custom function that has the same behavior of inbuilt String Trim Start Function
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimStart*/

//Not completed yet


function trimStart(str) {

    var lower_case = "abcdefghijklmnopqrstuvwxyz";
    var upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var pattern = "";
    var count = 0;
    var flag = false;
    for (var i = 0; i < str.length; i++) {
        for (var j = 0; j < 26; j++) {

            if (str[i] === upper_case[j] || str[i] === lower_case[j]) {
                pattern = str.substr(count)
                flag = true
                break;
            }

        }

        if (flag) {
            break;
        }
        if (str[i] === " ") {

            count++

        }


    }
    return pattern
}


console.log(trimStart("      I am a being trimmed from starting space"))