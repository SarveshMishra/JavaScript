// You need to find occurrences of the product of three consecutive numbers (i.e x,y, and z )whose product is equal to given P appear horizontally, vertically and diagonally in the given matrix.

//3 3 6
// 3 2 1
// 2 2 2
// 1 5 1
//output = 3 (The product P 6 presents 3 times in the matrix(1 Horizontal +1 Vertical + 1 Diagonal))


var matrix = [[3,2,1],[2,2,2],[1,5,1]]
var product = 1;
var n = matrix.length
var m = matrix[0].length
var numberOfProducts = 0;

var K = 6;

for (var i = 0; i <n; i++) {

    for (var j = 0; j <m ;j++){
       var x = matrix[i][j]
       var y = i-j
       var z = i+j 
       for (var k = i; k<m; k++) {
           for (var l = j; l < m; l++) {
                if(i === k && j== l){
                    break
                }
                else if((k-l == y)||(k+l == z)){
                    
                    product = x * matrix[k][l]
                    
                }
                
             
                if (product === K){
                        numberOfProducts++

                }
           }
       }
    }
}

console.log(numberOfProducts)