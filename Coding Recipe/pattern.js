   // Write code here
   var N = 9;

   for (var i = 1; i <= N; i++) {
       var pattern = "";

       for (var j = 1; j <= N; j++) {
           if (i % 2 === 0) {
               pattern = pattern + "*";

           } else {
               pattern = pattern + "_";
           }


       }
       console.log(pattern)


   }