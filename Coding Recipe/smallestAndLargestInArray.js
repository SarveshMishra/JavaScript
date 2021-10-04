//    //write code here
//  // for smallest
//  var n = 4
//  var arr = [4, -5, 8, 50]

 
//  for(var i = 0 ; i< n; i++){
//     var flag = 0;
//    for(var j = 0 ; j< n; j++){
   
//      if(arr[i] <= arr[j]){
//      flag++
//      }
   
//    }
//      if(flag === n){
//      var min = arr[i]
//        break;
//      }
    
//    } 
   
//      console.log(min)
       
//    //For largest
     
//    for(var i = 0 ; i< n; i++){
//     var flag = 0;
//    for(var j = 0 ; j< n; j++){
   
//      if(arr[i] >= arr[j]){
//      flag++
//      }
   
//    }
//      if(flag === n){
//      var max = arr[i]
//        break;
//      }
    
//    } 
   
//      console.log(max)
    
   

// second approach

var arr = [8, 5, -5, 6]

var min = 0;

for(var i = 0; i < arr.length; i++){
    if(arr[i]< min){

      min = arr[i];

    }


}
console.log(min)