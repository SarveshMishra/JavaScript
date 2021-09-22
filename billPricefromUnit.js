
/*Electricity consumption is measured via slab rates for a particular wattage capacity, which is as follows

Total Bill is a Input.
Total Price is to be found.

Fixed Charge :- 300
Charges for first 150 units :- ₹ 5.5 = 150
Charges above 150 = ₹ 6

Hence total  unit for 170 will be 930

Apart from the slab rates, a fixed charge of Rs. 80 is also added to every bill.

 */
var unit = 412;
var price = 300;

if((unit === 0) || (unit < 0)){
console.log(price);
}

else if((unit > 0) && (unit <= 150) ){
price += unit*5.5
  console.log(price)
}

else if((price > 150) && (price <= 500) ){
price = price + 825 + (unit-150)*6;

   console.log(price)

}



