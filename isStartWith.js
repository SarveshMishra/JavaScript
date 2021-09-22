//Write a custom function that has the same behavior of inbuilt String StartsWith Function
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith


function isStartWith(givenString, checkString, position) {
    var flag = false;

    if (position === undefined) {
        position = 0;
        for (var i = 0; i < givenString.length; i++) {

            for (var j = position; j < checkString.length; j++) {

                if (givenString[position] === checkString[j]) {
                    flag = true;
                }

            }

        }

    } else {
        for (var i = 0; i < givenString.length; i++) {

            for (var j = 0; j < checkString.length; j++) {

                if (givenString[position] === checkString[j]) {
                    flag = true;
                }

            }

        }
    }


    return flag;
}


console.log(isStartWith("I am so happy", "I"))
console.log(isStartWith("I am so happy", "I", 2))