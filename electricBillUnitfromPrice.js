
/*Electricity consumption is measured via slab rates for a particular wattage capacity, which is as follows

Total 930 rupees is the bill amount.

So total unit consumed would be 170. See calculation below.

Charges for 170 units :-

Fixed Charge :- 80
Charges for first 50 units :- 50 * 3 = 150
Charges of next 100 units :- 100 * 5 = 500
Charges of next 20 units :- 20 * 10 = 200

Hence total  unit for 170 will be 930

Apart from the slab rates, a fixed charge of Rs. 80 is also added to every bill.

 */
    var n = 530;
  var price = n-80;
  var unit = 0
  if((price === 0) || (price < 0)){
  console.log(unit);
  }
  
  else if((price > 0) && (price <= 150) ){
  unit = price/3
    console.log(unit)
  }
  
  else if((price > 150) && (price <= 650) ){
  price = price - 150;
   unit = 50 + (price/5)
     console.log(unit)
  
  }
  else if((price > 650) && (price <= 1000)){
  	price = price- 650;
    unit = 150 + (price/10)
      console.log(unit)
  
  }
  

  