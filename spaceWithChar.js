// Write a function to replace spaces in a given string with -

function spaceWithHyphen(str){
    var output= "";
        for(var i = 0; i<str.length; i++){
          
    
          if (str[i] === " "){
    
            output = output + "-";
          }
          else{
            output = output + str[i]
          }
    
        }
    return output
    }
    
    
    console.log(spaceWithHyphen("Welcome in Masai!"))