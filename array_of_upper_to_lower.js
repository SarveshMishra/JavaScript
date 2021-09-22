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

function convertUpperToLower(array) {
    
    var pattern = ""
    var output = []

    for (var i = 0; i < array.length; i++) {
        pattern = array[i]

        var lower = convertToLowerCase(pattern);

        output.push(lower);

    }


    return output


}

console.log(convertUpperToLower(["HELLO", "WORLD"]))