var upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var str = "MasAi"
var pattern = ""
var flag = false;
for(var i = 0; i <str.length;i++){
    for(var j = 0; j < 26; j++){

        if(str[i] == upper_case[j]){
            flag = true    
            break
        }
        

    }
    if(flag){

    }
    else{
        pattern = pattern +str[i]
    }
    

}
console.log(pattern)