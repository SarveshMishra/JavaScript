// You are given an array A of N integers.

// Write a program to find the sum of the absolute difference between all such pairs (A[i], A[j]) such that i < j and ( j-i ) is prime.

// Input = 1 2 3 5 7 12

// Pairs whose i<j and j-i is prime are :-

// 1. 1 3 [i=0, j=2] , Difference is 2.

// 2. 1 5[i=0, j=3] ,Difference is 4.

// 3. 1 12[i=0, j=5] ,Difference is 11

// 4. 2 5[i=1, j=3],Difference is  3.

// 5. 2 7[i=1, j=4],Difference is 5.

// 6. 3 7 [i=2, j=4],Difference is 4.

// 7. 3 12[i=2, j=5],Difference is 9

// 8. 5 12 [i=3, j=5],Difference is 7



// Sum of all differences is2+4+11+3+5+4+9+7 = 45.

function isPrime(num) {
    var flag = false;
    count = 0;
    for (var i = 1; i <= num; i++) {
        if (num % i == 0) {
            count++
        }
    }
    if (count == 2) {
        flag = true;
    }
    return flag;
}

function absoluteDifference(a, b) {
    var diff = (a - b);

    if (diff < 0) {
        return -diff;
    } else {
        return diff
    }


}

var A = [1, 2, 3, 5, 7, 12]
var sum = 0;

for (var i = 0; i < A.length; i++) {
    for (var j = 0; j < A.length; j++) {

        if ((i < j) && isPrime(j - i)) {
            sum += (absoluteDifference(A[j], A[i]))
        }

    }


}


console.log(sum)