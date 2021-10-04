// Write a custom function that has the same behavior of inbuilt Array Includes Function
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf

function arrayLastIndexOf(array, string) {
    var output = -1;
    for (var i = 0; i < array.length; i++) {

        if (string == array[i]) {
            output = i;
        }
    }
    return output;
}

console.log(arrayLastIndexOf(['Dodo', 'Tiger', 'Penguin', 'Dodo'], "Dodo"))