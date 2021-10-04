//Program for bubble Sort Algorithm.

    

var arr = [0,8,6,4,1];
var N = arr.length;

function bubbleSort(arr){


for(var i = 0; i < N-1; i++) {
        
        var swap;
        for(var j = 0; j<N-i-1; j++) {
            if(arr[j]> arr[j+1]) {
                swap = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = swap;
             
            }
        }
    }
    return arr;
}

console.log(bubbleSort(arr))
