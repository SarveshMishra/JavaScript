    //You are given a numberN, you need to find sum of all the even numbers which are less than or equal to N.

    var N = 10;
    var sum = 0;

    for (i = 0; i <= N; i++) {

        if (i % 2 === 0) {

            sum = sum + i

        }



    }

    console.log(sum);