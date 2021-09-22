// Write a custom function that has the same behavior of inbuilt Array Includes Function
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes


function arrayIncludes(array, input) {
    var output = false;
    for (var i = 0; i < array.length; i++) {

        if (input == array[i]) {
            output = true;
            break;
        }
    }
    return output;
}

console.log(arrayIncludes(['Dodo', 'Tiger', 'Penguin', 'Dodo'], "at"))