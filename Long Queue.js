/*There is a long queue of people in front of ATMs. Due to withdrawal limit per person per day, people come in groups to withdraw money.

Groups come one by one and line up behind the already present queue. The groups have a strange way of arranging themselves.

In a particular group, the group members arrange themselves in increasing order of their height(not necessarily strictly increasing).

You are given a array representing heights of persons in queue. Since groups are standing behind each other, one cannot differentiate between different groups and the exact count cannot be given.

Can you find the minimum number of groups that can be observed in the queue?


Hint:
Minimum groups for queue [1,2,4,3,5,8] is 2as  [1, 2, 4] can be in 1 group and [3, 5, 8] can be  in other.


  

*/


var array = [99, 92,90, 87, 83, 80, 79, 75, 71, 67, 66, 52, 51, 36, 36, 33, 33, 27, 24, 21, 13, 11, 2, 2, 1]
var n = array.length
var max = 0;
var group = 0;
for (var i = 0; i <n; i++) {
    if(array[i]>=array[i-1]){
        
        

    }
    else{
        group++;
      
    }


}

console.log(group)