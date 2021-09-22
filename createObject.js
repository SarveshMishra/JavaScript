// Problem
// Create an object with the following functionality
// Ability to add a student details and 3 subject marks
// Methods to find the student with the least and highest total
var names = ["A", "B", "C", "D"]
var math = [10, 15, 21, 24]
var physics = [15, 35, 98, 53]
var chemistry = [50,43 , 64 , 76]


var studentData = {
     details : [],

    getDetails: function(nm, math, phy, chem) {
        var items = {
            names: nm,
            maths : math,
            physics : phy,
            chemistry: chem
        }
        this.details.push(items);

    },
    getHighest: function(){

    },
    getLowest: function(){

    },

}
console.log(studentData)
for(var i = 0; i <names.length; i++){
    studentData.getDetails(names[i], math[i], physics[i], chemistry[i]);

}

console.log(studentData)
