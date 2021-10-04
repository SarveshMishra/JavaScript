 var a = 35;
 var b = 78;
 var c = 89;

 if ((a > b && a < c) || (a < b && a > c)) {
   console.log(a)
 }
 if ((b > c && b < a) || (b < c && b > a)) {
   console.log(b)
 } else if ((c > b && c < a) || (c < b && c > a)) {
   console.log(c)
 }