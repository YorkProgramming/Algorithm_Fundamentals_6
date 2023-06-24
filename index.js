//1.
//Threes and Fives

/* Create threesFives() that adds values from 100 and 4000000 (inclusive) 
if that value is evenly divisible by 3 or 5 but not both. 
Display the final sum in the console.

Second: Create betterThreesFives(start, end) that allows you to enter arbitrary start 
and end values for your range. Think of threesFives() as betterThreesFives(100,4000000)*/

function threesFives(){
    var sum = 0;
    for(var i = 100; i <= 4000000; i++){
        if(i % 3 == 0 && i % 5 == 0){
            continue;
        }else if(i % 3 == 0 || i % 5 == 0){
            sum += i;
        }
    }
    console.log(sum);
}

threesFives();

//We set sum to 0 and then we loop through the range of 100 to 4000000.
//If the number is divisible by 3 and 5, we continue to the next iteration.
//If the number is divisible by 3 or 5, we add it to the sum.
//Finally, we print the sum.

//##########################################################################################################

//2.
//Generate Coin Change

/* Change is inevitable (especially when breaking a twenty).
Make generateCoinChange(cents). Accept a number of American cents,
compute and print how to represent that amount with smallest number of coins.
Common American coins are pennies (1 cent), nickels (5 cents), dimes (10 cents), and quarters (25 cents).*/

function generateCoinChange(cents){
    var quarters = 0;
    var dimes = 0;
    var nickels = 0;
    var pennies = 0;
    while(cents > 0){
        if(cents >= 25){
            quarters = Math.floor(cents / 25);
            cents = cents % 25;
        }else if(cents >= 10){
            dimes = Math.floor(cents / 10);
            cents = cents % 10;
        }else if(cents >= 5){
            nickels = Math.floor(cents / 5);
            cents = cents % 5;
        }else{
            pennies = cents;
            cents = 0;
        }
    }
    console.log("Quarters: " + quarters + ", Dimes: " + dimes + ", Nickels: " + nickels + ", Pennies: " + pennies);
}

generateCoinChange(94);

//We set the number of quarters, dimes, nickels, and pennies to 0.
//We loop through the number of cents and check if it is greater than or equal to 25.
//If it is, we divide the number of cents by 25 and round down to the nearest integer.
//We then set the number of quarters to that value and set the number of cents to the remainder.
//We repeat this process for dimes, nickels, and pennies.
//Finally, we print the number of each coin.

//##########################################################################################################

//3.
//Messy Math Mashup

/* Create messyMath(num), which will return the following sum: add all integers from 0 up to the given num,
except for the following special cases of our count value:

If current count (not num) is evenly divisible by 3, don’t add to sum; skip to the next count;
Otherwise, if current count is evenly divisible by 7, include it twice in sum instead of once;
Regardless of the above, if current count is exactly 1/3 of num, return -1 immediately.
For example, if given num is 4, return 7. If given num is 8, return 34. If given num is 15, return -1.*/

function messyMath(num){
    var sum = 0;
    for(var i = 0; i <= num; i++){
        if(i == num / 3){
            return -1;
        }else if(i % 3 == 0){
            continue;
        }else if(i % 7 == 0){
            sum += i * 2;
        }else{
            sum += i;
        }
    }
    return sum;
}

console.log(messyMath(4));
console.log(messyMath(8));
console.log(messyMath(15));

//We set the sum to 0 and then we loop through the range of 0 to num.
//If the current count is 1/3 of num, we return -1.
//If the current count is divisible by 3, we continue to the next iteration.
//If the current count is divisible by 7, we add it to the sum twice.
//Otherwise, we add it to the sum.

//##########################################################################################################

//4.
// Twelve-Bar Blues

/* Write a function that console.logs the number 1, then "chick", then "boom", then "chick", then 2,
then "chick", "boom", "chick" – continuing the same cycle for each number up to (including) 12.*/

function twelveBarBlues(){
    for(var i = 1; i <= 12; i++){
        console.log(i);
        console.log("chick");
        console.log("boom");
        console.log("chick");
    }
}

twelveBarBlues();

//We loop through the range of 1 to 12 and print the number, "chick", "boom", and "chick" for each iteration.

//##########################################################################################################

//5.
//Fibonacci

/* Create a function to generate Fibonacci numbers. In this famous mathematical sequence,
each number is the sum of the previous two, starting with values 0 and 1. Your function should accept one argument,
an index into the sequence (where 0 corresponds to the initial value, 4 corresponds to the value four later, etc).

Examples: fibonacci(0) = 0 (given), fibonacci(1) = 1 (given), fibonacci(2) = 1 (fib(0)+fib(1), or 0+1), 
fibonacci(3) = 2 (fib(1) + fib(2)3, or 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3),
fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8), etc.*/
//Do this without using recursion first. If you don't know what a recursion is yet, don't worry as we'll be
//introducing this concept in Part 2 of this assignment.

function fibonacci(num){
    var fib = [0, 1];
    for(var i = 2; i <= num; i++){
        fib.push(fib[i - 2] + fib[i - 1]);
    }
    return fib[num];
}

console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));

//We create an array with the first two numbers of the Fibonacci sequence.
//We loop through the range of 2 to num and push the sum of the previous two numbers to the array.
//Finally, we return the number at the index of num.

//##########################################################################################################

//6.
//Sum to One Digit

/* Kaitlin sees beauty in numbers, but also believes that less is more.
Implement sumToOne(num) that sums a given integer’s digits repeatedly until the sum is only one digit.
Return that one-digit result. Example: sumToOne(928) returns 1, because 9+2+8 = 19, then 1+9 = 10, then 1+0 = 1.*/
//Do this with recursion.

function sumToOne(num){
    var sum = 0;
    while(num > 0){
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    if(sum > 9){
        return sumToOne(sum);
    }else{
        return sum;
    }
}

console.log(sumToOne(928));

//We set the sum to 0 and then we loop through the number while it is greater than 0.
//We add the last digit of the number to the sum and then remove the last digit from the number.
//If the sum is greater than 9, we call the function again with the sum as the argument.
//Otherwise, we return the sum.

//##########################################################################################################

//7.
//Clock Hand Angles

/* Regardless of how hard a Dojo student works (and they should work hard), they need time now and then to unwind
– like hands on a clock. Traditional clocks are increasingly uncommon, but most can still read an analog clock's
hands of hours, minutes, and seconds. Create clockHandAngles(seconds) that, given a number of seconds since 12:00:00,
prints angles (in degrees) of the hour, minute and second hands. As review, 360 degrees form a full rotation.
For input of 3600 secs (equivalent to 1:00:00), print "Hour hand: 30 degs. Minute hand: 0 degs. Second hand: 0 degs."
For an input parameter seconds of 119730 (which is equivalent to 9:15:30 plus 24 hours!), you should log
"Hour hand: 277.745 degs. Minute hand: 93 degs. Second hand: 180 degs." Note: in the second example,
the angle for the minute hand is not simply 90 degrees; it has advanced a bit further, because of the additional
30 seconds in that minute so far.*/

function clockHandAngles(seconds){
    var hour = Math.floor(seconds / 3600);

    var minute = Math.floor((seconds % 3600) / 60);

    var second = seconds % 60;

    var hourAngle = hour * 30 + minute * 0.5 + second * 0.008333333333333333;

    var minuteAngle = minute * 6 + second * 0.1;

    var secondAngle = second * 6;


    console.log("Hour hand: " + hourAngle + " degs. Minute hand: " + minuteAngle + " degs. Second hand: " + secondAngle + " degs.");
}

clockHandAngles(3600);
clockHandAngles(119730);

//We set the hour to the number of hours in the seconds.
//We set the minute to the number of minutes in the seconds.
//We set the second to the number of seconds in the seconds.
//We set the hour angle to the hour times 30 plus the minute times 0.5 plus the second times 0.008333333333333333.
//We set the minute angle to the minute times 6 plus the second times 0.1.
//We set the second angle to the second times 6.
//We do this because there are 360 degrees in a circle and 12 hours in a clock.
//So there are 30 degrees in an hour and 0.5 degrees in a minute and 0.008333333333333333 degrees in a second.
//Finally, we print the angles of the hour, minute, and second hands.

//##########################################################################################################

//8.
//Is Prime

/* Return whether a given integer is prime. Prime numbers are only evenly divisible by themselves and 1.
Many highly optimized solutions exist, but for now just create one that is easy to understand and debug.*/
//Examples: isPrime(2) returns true, isPrime(3) returns true, isPrime(4) returns false, isPrime(9) returns false,
//isPrime(17) returns true, isPrime(147) returns false.*/
//Do this without using the built-in Prime number algorithm.

function isPrime(num){
    for(var i = 2; i < num; i++){
        if(num % i == 0){
            return false;
        }
    }

    return true;
}

console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(4));
console.log(isPrime(9));
console.log(isPrime(17));
console.log(isPrime(147));

//We loop through the range of 2 to num and check if the number is divisible by any number in that range.
//If it is, we return false.
//Otherwise, we return true.

//##########################################################################################################

