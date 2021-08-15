 var check = true;
 var num = 3;

 if (num === 1) {
     console.log("No");
 } else if (num > 1) {


     for (var i = 2; i < num; i++) {
         if (num % i === 0) {
             check = false;
             break;
         }
     }

     if (check) {
         console.log("Yes");
     } else {
         console.log("No");
     }
 }