// Description

// You are given an array A with N elements. You are allowed to remove only one element, which makes the sum of all the remaining elements exactly divisible by 7.

// Your task is to find the first index of smallest element that can be removed from array. If there is no answer print-1

// Input = 14 7 8 2 4 output = 1
// Both 14 and 7 are valid answer but 7 is the smallest hence index is 1.


var A = [0, 1, 1, 0, 0, 0, 0, 0, 1, 1];
var N = A.length;

var index = -1;
var indexValue = Number.MAX_SAFE_INTEGER;

function findSum(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];

    }
    return sum;
}



for (var i = 0; i < N; i++) {
    sum = findSum(A);

    sum = sum - A[i];

    if (sum % 7 == 0) {
        if (indexValue > A[i]) {
            indexValue = A[i];

            index = i;

        }
    }

}
console.log(index);

