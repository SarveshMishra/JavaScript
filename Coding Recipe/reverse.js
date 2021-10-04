var num = 850;

var reverse = 0;

while (num != 0) {
    reverse = (reverse * 10) + (num % 10);
    num = Math.floor(num / 10);
    //num = parseInt(num/100);  We can use both function 
}
console.log(reverse);