var array = [1, 2, 1, 2, 3, 1]
var n = array.length
var max = 0;
var group = 0;
var subArray = [];
for (var i = 0; i <n; i++) {

    if(array[i]>=array[max]){
        max = array[i];
        subArray.push(array[i]);

    }
    else{
        
        group++;
      
    }


}

console.log(group)
console.log(subArray)