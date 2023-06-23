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


