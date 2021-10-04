//Write a custom function that has the same behavior of inbuilt String Substring Function
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring

function subString(str, x, y) {

    var pattern = "";
    if (y === undefined) {

        y = str.length;

        for (var i = 0; i < str.length; i++) {

            if (i === x) {

                for (var j = x; j < y; j++) {

                    pattern += str[j]


                }

            }
        }
    } else {
        for (var i = 0; i < str.length; i++) {

            if (i === x) {

                for (var j = x; j <= y; j++) {

                    pattern += str[j]


                }

            }
        }
    }

    return pattern;
}


console.log(subString("hello world", 1, 6))