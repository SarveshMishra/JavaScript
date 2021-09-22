var n = "974320"
var x=  "420";
var flag = false;

for (var i = 0; i <n.length; i++ )
{

if((n[i] === x[0]) && (n[i+1] === x[1]) && (n[i+2] === x[2])){

    flag = true;
    break;
}


}

if(flag){

    console.log("catch")
}
else {
    console.log("escaped")
}
