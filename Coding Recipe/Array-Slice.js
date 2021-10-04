// Write a custom function that has the same behavior of inbuilt Array Includes Function
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

function arraySlice(array, startIndex, endIndex) {
    if (endIndex == undefined) {
        endIndex = array.length;
    }
    if (startIndex < 0) {
        startIndex = array.length + startIndex;

    }

    if (endIndex < 0) {

        endIndex = array.length + endIndex;

    }


    var outputArray = [];
    for (var i = startIndex; i < endIndex; i++) {
        outputArray.push(array[i]);
    }

    return outputArray;
}


console.log(arraySlice(['ant', 'bison', 'camel', 'duck', 'elephant'], 2, -1))