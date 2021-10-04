// Description

// You are given an array A of N integers.

// Your task is to find the maximum number of times an odd number is continuously repeated in the array.
function isOdd(number) {
    if (number%2 != 0){
        return true;
    }
    else {
        return false;
    }
}

var array = [1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 1]

var N = array.length;
var count = 0;
var longest = 0;

for (var i = 1; i<N; i++) {
    // console.log(count)
    // console.log("------")
    // console.log(array[i])
    // console.log("***")
    for(var j = 0; j < N; j++) {

        if(isOdd(array[i]) && (array[j]===array[i]) ){

            count++
            break
        }
        
    }
    // console.log(count)
    // console.log("------")
    // console.log(array[i])

    if(!isOdd(array[i]) && (longest< count)){
        longest = count
        count = 0
        
    }
    

}
console.log(longest)
