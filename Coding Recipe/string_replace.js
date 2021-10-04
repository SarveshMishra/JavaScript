/*Write a custom function that has the same behaviour of inbuilt String Replace Function
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace*/


function replace(string, str, replace) {
    var output = ""
    var array = string.split(" ");

    for (var i = 0; i < array.length; i++) {

        if (array[i] === str) {

            output = output + replace + " ";


        } else {

            output = output + array[i] + " ";
        }
    }

    return output;



}


console.log(replace("Welcome to Masai", "Masai", "this World"))