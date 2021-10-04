/*Write a function isOdd which returns a boolean value based the number is odd or not
Use this function to print the odd numbers from 0 to a given limit(included) */

function isOdd(x){

    if(x%2 != 0){
      return true
    }
    else{
      return false
    }
}

var limit = 15

if(isOdd(3)){

  for(var i = 0; i<=limit; i++){
      if(i%2 != 0){
        console.log(i)
      }
    

  }
}
else{

  console.log("Number is Even")
}