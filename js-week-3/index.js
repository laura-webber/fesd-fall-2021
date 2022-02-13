

//Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
let ages = [3, 9, 23, 64, 2, 8, 28, 93];

/* Programmatically subtract the value of the first element in the array from the value 
in the last element of the array (do not use numbers to reference the last element, 
find it programmatically, ages[7] – ages[0] is not allowed). Print the result to the 
console. */

 console.log(ages[ages.length-1] - ages[0]);

//Add a new age to your array and repeat the step above to ensure 
//it is dynamic (works for arrays of different lengths).

ages.push(34);
document.write(ages);

 console.log(ages[ages.length-1] - ages[0]);

//Use a loop to iterate through the array and calculate 
//the average age. Print the result to the console.


let total = 0;
let avg = 0;

for(let i = 0; i <= ages.length-1; i++){
    total += ages[i];
}

let avg = total/ages.length;
console.log(avg); */

//Create an array called names that contains the following 
//values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’
let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
names[6] // out of bounds errors

//Use a loop to iterate through the array and calculate the 
//average number of letters per name. Print the result to the console.
let total = 0; 
let avg = 0;

for(let i = 0; i <= names.length-1; i++){
    total = total + names[i].length;
}

i 0 names[0]
i 1 names[1]
i 2 names[2]



avg = total/names.length;
console.log(avg);

//Use a loop to iterate through the array again and concatenate 
//all the names together, separated by spaces, and print the result to the console.


//functions
 

function add(num1, num2){
    console.log(num1 + num2);
}

add(5, 35);

declaring - definition
invoking - run it
parameters - variable inputs
arguments - are the actual values that get put in as inputs

let total = 0; //globally accessible

function multiply(num1, num2){
    let total = num1 * num2; //locally accessible
    return total;
}

multiply(5, 35);

scope 
global scope
variable can be accessed anywhere
local scope

//Write a function that takes two parameters, 
//word and n, as arguments and returns 
//the word concatenated to itself n number of 
//times. (i.e. if I pass in ‘Hello’ and 3, 
//I would expect the function to return ‘HelloHelloHello’).


function stringRepeat(word, n){
    let result = "";
    for(let i = 1; i <= 3; i++){
        result+=word;
    }
    return result;
}

stringRepeat("Hello", 3);

//Write a function called willBuyDrink that takes 
//a boolean isHotOutside, and a number 
//moneyInPocket, and returns true if it 
//is hot outside AND if moneyInPocket is 
//greater than 10.50.

function willBuyDrink(isHotOutside, moneyInPocket){
    if(isHotOutside == true && moneyInPocket > 10.5)
        return true;
    else
        return false;
}

function willBuyDrink(isHotOutside, moneyInPocket){
    return isHotOutside == true && moneyInPocket > 10.5;
}