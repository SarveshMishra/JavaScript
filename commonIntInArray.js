// You are given 2 arrays arr1 and arr2 of N integers.

// Your task is to write a program that finds the one integer which is common in both arrays (arr1 and arr2).

// Note: There is always one integer common in both arrays.

var arr1 = [1, 2, 3]
var arr2 = [4, 5, 2]

for (var i = 0; i <arr1.length; i++) {
    for (var j = 0; j <arr2.length; j++){
        if (arr1[i] === arr2[j])
        console.log(arr1[i])

    }
}
