/*Given a string swap the case and print the output
Sample Input - Test
Sample Output - tEST
NOTE: Use multiple functions to achieve the result, NOT one single code block*/



function convertToLowerCase(strings) {

    var lower_case = "abcdefghijklmnopqrstuvwxyz";
    var upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var pattern = "";
    for (var i = 0; i < strings.length; i++) {
        for (var j = 0; j < upper_case.length; j++) {
            if (strings[i] === upper_case[j]) {

                pattern = pattern + lower_case[j];

            }

        }

    }


    return pattern
}

function convertToUpperCase(strings) {

    var lower_case = "abcdefghijklmnopqrstuvwxyz";
    var upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var pattern = "";
    for (var i = 0; i < strings.length; i++) {
        for (var j = 0; j < lower_case.length; j++) {
            if (strings[i] === lower_case[j]) {

                pattern = pattern + upper_case[j];

            }

        }

    }


    return pattern
}

function swap(input) {

    var lower_case = "abcdefghijklmnopqrstuvwxyz"
    var upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var pattern = "";

    for (var i = 0; i < input.length; i++) {

        for (var j = 0; j < upper_case.length; j++) {

            if (input[i] == upper_case[j]) {

                pattern = pattern + convertToLowerCase(input[i])

            } else if (input[i] == lower_case[j]) {

                pattern = pattern + convertToUpperCase(input[i])
            }


        }

    }
    return pattern

}


console.log(swap("Test"))