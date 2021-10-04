//Program for selection Sort Algorithm.


var arr = [0,8,6,4,1];
var N = arr.length;

function selectionSort(array){


for(var i = 0; i < N; i++) {
       
        var swap;
        for(var j = i+1; j<N; j++) {
            if(array[j]< array[i]) {
                swap = array[i];
                array[i] = array[j];
                array[j] = swap;
             
            }
        }
    }
    return array;
}

console.log(selectionSort(arr))
