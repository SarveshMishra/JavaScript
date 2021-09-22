// You are given an array A of N integers along with a target integerK.

// Your task is to find out the number of pairs of integers present in the array, whose sum is equal to the target valueK.
// input=  5 9
// 3 0 6 2 7
// output= 2 because {3,6}, {2,7}

var A = [2, 2];

var K = 4;
var count = 0;

for (var i = 0; i < A.length; i++) {


    for (var j = i+1; j < A.length; j++) {
        sum = A[i] + A[j];
            


        if (sum == K) {
            count++

        }

    }

}

console.log(count)