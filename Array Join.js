/*Write a custom function that has the same behavior of inbuilt Array Join Function
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
*/


function arrayJoin(array, join) {
    var output = ""
    if (join === undefined) {
        join = ","

    }

    for (var i = 0; i < array.length; i++) {
        if (i === array.length - 1) {
            output += array[i]

            break;
        }
        output += array[i] + join;


    }

    return output;


}


console.log(arrayJoin(["hello", "world"], ))
console.log(arrayJoin(["hello", "world"], "-"))