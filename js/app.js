console.log("This is Homework 4");
//weekend-js-1
//Long_Weekend covering loops, functions, and datatypes

// 1. Conceptual Questions  ////////////////////////////////////////////////////
// How do we assign a value to a variable?
// --We would use the " = " assignment operator.
// How do we change the value of a variable?
// --We would use the " = " once again.
// How do we assign an existing variable to a new variable?
// --Using the = assignment An example would be if we wrote: "var A = var B"


// 2. Strings //////////////////////////////////////////////////////////////////
// 2A. Create a variable called firstVariable.
// assign it the value of a string => "Hello World"
// change the value of this variable to a number.
// store the value of firstVariable into a new variable called secondVariable
// change the value of secondVariable to a string.
// What is the value of firstVariable?

// var firstVariable = "Hello World";
// var firstVariable = 5;
// var secondVariable = firstVariable
// var secondVariable = "This is a String!"
// console.log(firstVariable); // Prints 5


// 2B. Create a variable called yourName and set it equal to your name as a string.
// Write an expression that takes the string "Hello, my name is " and the variable yourName so that it returns a new string with them concatenated.
// ex: Hello, my name is Jean Valjean

// var davidKolia = "David Kolia";
// console.log("Hello, my name is " + davidKolia + ".");


// 3. Booleans  ////////////////////////////////////////////////////////////////
// Using the provided variable definitions, replace the blanks with a mathematical or boolean operator that evaluates the expression to true. 👋


  // const a = 4;
  // const b = 53;
  // const c = 57;
  // const d = 16;
  // const e = 'Kevin';

// a < b;
// c > d;
// 'Name' === 'Name';
// a + b >= c;
// a * a >= d;
// e >= 'Kevin';
// 48 == '48';


// 4.  The Farm  ///////////////////////////////////////////////////////////////
// Write code that will print out "mooooo" if the variable animal is equal to cow.


// function theFarm(animal) {  // Sets up the function and parameters
//   if (animal === "cow") {
//     console.log("mooooo");
//   }
// }
//
// theFarm("cow")  // Calls the function


// Change your code so that if the variable animal is anything other than a cow, your should print out "Hey! You're not a cow."


// function theFarm(animal) {  // Sets up the function including else statement
//   if (animal === "cow") {
//     console.log("mooooo");
//   } else {
//     console.log("Hey! You're not a cow.");
//   }
// }
//
// theFarm("cow")  //  Calls the function, including incorrect answer
// const animal = "sparrow";
// theFarm(animal)


// 5.  Driver's Ed /////////////////////////////////////////////////////////////
// Write a variable that will hold a person's age.

// let personsAge = 50       // Sets the variable and assigns value
// console.log(personsAge);  // Logs said variable
//
// // Write code that will print out "Here are the keys", if the age is 16 years or older.
//
// let personsAge2 = (35)          // Sets variable and assigns value
//   if (personsAge2 => 16) {      // If greater than 16....
//   console.log("Here are the keys"); }   // Run this log
//
// // Change your code so that if the age is younger than 16, a message will print "Sorry, you're too young."
//
// let personsAge3 = 15.50          // Sets the variable and assigns value
//   if (personsAge3 >= 16) {       // Sets if condition
//   console.log("Here are the keys"); }   // Log if greater than 16
//   else {
//     console.log("Sorry, you're too young.");  // Logs if less than 16
//   }


// 6. Just Loop It  ////////////////////////////////////////////////////////////
// Write code that will print out all the numbers in the range 0 - 10.

// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }


// Write code that will print out all the numbers in the range 10 - 4000.

// for (let i = 10; i <= 4000; i++) {
//   console.log(i);
// }


// Write code that will print out every other number in the range 10 - 4000.

// for (let i = 10; i < 4000; i++) {
//   if (i % 2 === 0){     // Using %2 to create a counter that skips odd numbers
//     console.log(i);
//   }
// }


// 7. Let's get even  //////////////////////////////////////////////////////////
// Print out the even numbers that are within the range of 1 - 100.

// for (let i = 1; i <= 100; i++) {
//   if (i % 2 === 0){     // Using %2 to create a counter to log even numbers
//     console.log(i + " is an even number.");
//   }
// }


// Adjust your code to add a message next to the even number that says: "is an even number".
//
// Example Output:
//
// 2 is an even number
// 4 is an even number
// 6 is an even number



// 8. Give me Five  ////////////////////////////////////////////////////////////
// For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five.
// Example Output:
//
// I found a 5. High five!
// I found a 10. High five!

// for (let i = 0; i <= 100; i++) {
//   if (i % 5 === 0){     // Using % 5 to create a list of numbers that are ONLY multiples of five
//     console.log("I found a " + i + ". High five!");
//   }
// }


// Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three.
// Example Output:
//
// I found a 3. Three is a crowd
// I found a 5. High five!
// I found a 6. Three is a crowd
// I found a 9. Three is a crowd
// I found a 10. High five!

// for (let i = 0; i <= 100; i++) {
//   if (i % 5 === 0){     // Using % 5 to create a list of numbers that are ONLY multiples of five
//     console.log("I found a " + i + ". High five!");
//   }
//   if (i % 3 === 0){
//     console.log("I found a " + i + ". Three is a crowd");
//   }
// }


// 9. Savings account //////////////////////////////////////////////////////////
// Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.

// let bank_account = 0;       // Defines Variable
// for (let i = 1; i <= 10; i++) {     // Defines when loop begins and ends
//   bank_account = (bank_account += i)    // " += " causes the sum of i to be consistently added to the account
// }
//   console.log(bank_account);    // Logs final account numbers

// Check your work! Your banck_account should have $55 in it.
//
// You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
// Check your work! Your banck_account should have $10,100 in it.

// let bank_account2 = 0;
// for (let i = 1; i <= 100; i++) {
//   bank_account2 = (bank_account2 += i * 2)  // This line adds a "* 2" to double the pay each week
// }
//   console.log(bank_account2);


// 10. Multiples of 3 and 5 ////////////////////////////////////////////////////
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//
// Find the sum of all the multiples of 3 or 5 below 1000.
//
// 👏 You just solved Project Euler problem 1! 👏


// x = 0;
//
// for (let i = 0; i < 1000; i++) {
//   if (i % 3 === 0 || i % 5 === 0) {  //  Tried running two if statements, but was getting wrong answer out of for loop. Perhaps was double counting multiples of 15- thus increasing the number. Putting the || operator seems to have fixed that.
//     x += i;
//   }
// }
// console.log(x);


// 11. Easy Does It ////////////////////////////////////////////////////////////
// Create an array that contains three quotes and store it in a variable called quotes.

// let quotes = ["This is string1", "This is string2", "This is string 3"];
// console.log(quotes);

// Random
// Given the following array const randomThings = [1, 10, "Hello", true]

// const randomThings = [1, 10, "Hello", true]

// how do you access the 1st element in the array?
// console.log(randomThings[0]);   // JS is a base 0 index

// Change the value of "Hello" to "World".

// randomThings[2] = "World";
// console.log(randomThings[2]);

// Check the value of the array to make sure it updated the array.

// console.log(randomThings);


// 12. We've Got Class  ////////////////////////////////////////////////////////
// Given the following array const ourClass = ["Gizmo", "Zoom", "Github", "Slack"]

// ourClass = ["Gizmo", "Zoom", "Github", "Slack"];

// What would you write to access the 3rd element of the array?
// console.log(ourClass[2]);

// Change the value of "Github" to "Octocat"
// ourClass[2] = "Octocat";
// console.log(ourClass[2]);

// Add a new element, "Cloud City" to the array.
// ourClass.push("Cloud City");
// console.log(ourClass);


// 13. Mix It Up  //////////////////////////////////////////////////////////////
// Given the following array const myArray = [5 ,10 ,500, 20]

// myArray = [5, 10, 500, 20]

// using the push method, add the string "Egon" to the end of the array.

// myArray.push("Egon");
// console.log(myArray);

// using a method, remove the string from the end of the array.

// myArray.pop("Egon");
// console.log(myArray);

// using the unshift method, add the string "Bob Marley" to the beginning of the array

// myArray.unshift("Bob Marley");
// console.log(myArray);

// using a different method, remove the string from the beginning of the array

// myArray.splice(0, 1);
// console.log(myArray);

// use the reverse method on this array

// myArray.reverse();
// console.log(myArray);


// 14. Biggie Smalls  //////////////////////////////////////////////////////////
// Write an if..else statement:

// x = 1;
//
// if (x = 1) {
//   console.log("This is true.");
// } else {
//   console.log("This is false.");
// }

// console.log little number if the number is entered is less than 100

// x = 5
// if (x < 100) {
//   console.log("That is a little number");
// }

// If the number entered is 100 or more, alert big number.

// x = 5
// if (x < 100) {
//   console.log("This is a little number.");
// } else {
//   alert("That is a big number!");
// }

// y = 500
// if (y < 100) {
//   console.log("This is a little number.");
// } else {
//   alert("That is a big number!");
// }


// 15. Monkey in the Middle ////////////////////////////////////////////////////
// Write an if...else if...else statement:


// x = 1                // Uncomment to test if-else-if-else statement
// // x = 500           // Uncomment to test if-else-if-else statement
// // x = "bananas"     // Uncomment to test if-else-if-else statement
//
// if (x === 1) {
//   console.log("x is equal to 1.");
// } else if (x > 1) {
//   console.log("x is greater than one.");
// } else {
//   console.log("Hmm, x may not be a number...");
// }


// console.log little number if the number entered is less than 5.


// x = 1                // Uncomment to test if-else-if-else statement
// // x = 500           // Uncomment to test if-else-if-else statement
// // x = 7             // Uncomment to test if-else-if-else statement
//
// if (x < 5) {
//   console.log("little number");
// } else if (x > 10) {
//   console.log("big number");
// } else {
//   console.log("monkey");
// }


// If the number entered is more than 10, log big number.
//
// Otherwise, console.log "monkey".



// 16. What's in Your Closet? //////////////////////////////////////////////////
// Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.

// const kristynsCloset = [
//   "left shoe",
//   "cowboy boots",
//   "right sock",
//   "GA hoodie",
//   "green pants",
//   "yellow knit hat",
//   "marshmallow peeps"
// ];

// Thom's closet is more complicated. Check out this nested data structure!!
// const thomsCloset = [
//   [
//     // These are Thom's shirts
//     "grey button-up",
//     "dark grey button-up",
//     "light blue button-up",
//     "blue button-up",
//   ],[
//     // These are Thom's pants
//     "grey jeans",
//     "jeans",
//     "PJs"
//   ],[
//     // Thom's accessories
//     "wool mittens",
//     "wool scarf",
//     "raybans"
//   ]
// ];
// What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.

// console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");

// Kristyn can't find her left shoe. Remove this item from her closet and save it to a variable named kristynShoe.

// const kristynsShoe = kristynsCloset.splice(0, 1);
// console.log(kristynsCloset);
// console.log(kristynsShoe);

// Kristyn just bought some sweet shades! Add "raybans" to her closet after "yellow knit hat".

// kristynsCloset.splice(5, 0, "raybans");   // 5 begins the splice- 0 removes no items from the array, and the string is then added
// console.log(kristynsCloset);              // Used Splice and logged to prove

// Kristyn spilled coffee on her hat... modify this item to read "stained knit hat" instead of yellow.

// kristynsCloset[5] = "stained knit hat";   // asked for and renamed index 5 item
// console.log(kristynsCloset);

// Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirts array.

// console.log(thomsCloset[0][0]);

// In the same way, access one item from Thom's pants array.

// console.log(thomsCloset[1][0]);

// Access one item from Thom's accessories array.

// console.log(thomsCloset[2][1]);

// Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"

// console.log("Thom is looking fabulous in his " + thomsCloset[0][0] + ", " + thomsCloset[1][0] + ", and his " + thomsCloset[2][1] + ".");

// Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.

// thomsCloset[1][2] = "Footie Pajamas"
// console.log(thomsCloset[1]);          // Logs the entire array

// 17. Functions  //////////////////////////////////////////////////////////////
// printGreeting
// Write a function called printGreeting with a parameter name that returns a greeting with the argument interpolated into the greeting.
//
// console.log(printGreeting("Slimer"));
// => Hello there, Slimer!


const printGreeting = (printName) => {
  console.log("Hello there, " + printName +"!");
}

printGreeting("Slimer")


// 18. reverseWordOrder ////////////////////////////////////////////////////////
// Write a function reverseWordOrder that accepts a single argument, a string. The function should return a string with the order of the words reversed. Don't worry about punctuation.
//
// console.log(reverseWordOrder("Ishmael me Call"));
// => "Call me Ishmael"
//
// console.log(reverseWordOrder("I use Lâncome on my comb"));
// => "comb my on Lâncome use I"



// 19. calculate  //////////////////////////////////////////////////////////////
// Write a function called calculate.
//
// This function should take three arguments, two numbers and a string.
//
// Name the parameters num1, num2, and operation.
//
// If the function receives the string "add" for the operation parameter, it will return the sum of num1 and num2.
//
// If the function receives the string "sub" for the operation parameter, it will return num1 minus num2.
//
// Do the same thing for multiplication "mult", division "div", and exponent "exp" (where num2 is the exponent of num1).
//
// console.log(calculate(4, 3, "sub"));
//
// => 1
// console.log(calculate(4, 3, "exp"));
//
// => 64



// 20. "1"  ////////////////////////////////////////////////////////////////////
// Write a function printCool that accepts one parameter, name as an argument. The function should print the name and a message saying that that person is cool.
//
// console.log(printCool("Captain Reynolds"));
// => "Captain Reynolds is cool";



// 21. "2"  ////////////////////////////////////////////////////////////////////
// Write a function calculateCube that takes a single number and prints the volume of a cube made from that number.
//
// console.log(calculateCube(5));
// => 125



// 22. "3"  ////////////////////////////////////////////////////////////////////
// Write a function isAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case.
//
// console.log(isAVowel("a"));
// => true



// 23. "4"  ////////////////////////////////////////////////////////////////////
// Write a function getTwoLengths that accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.
//
// console.log(getTwoLengths("Hank", "Hippopopalous"));
// => [4, 13]



//  24. "5" ////////////////////////////////////////////////////////////////////
// Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.
//
// console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));
// => [5, 4, 2, 2, 4]



//  25. "6" ////////////////////////////////////////////////////////////////////
// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned.
//
// console.log(maxOfThree(6, 9, 1));
// => 9



// 26. "7"  ////////////////////////////////////////////////////////////////////
// Write a function printLongestWord that accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.
//
// console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));
// => "Peanutbutter"



// 27. "8"  ////////////////////////////////////////////////////////////////////
// Write a Javascript function called transmogrify. This function should accept three arguments, which you can assume will be numbers. Your function should return the "transmogrified" result.
//
// The transmogrified result of three numbers is the product of the first two numbers, raised to the power of the third number.
//
// For example, the transmogrified result of 5, 3, and 2 is (5 times 3) to the power of 2 is 225.
//
// console.log(transmogrify(5, 3, 2));
// => 225



// 27. Syntax //////////////////////////////////////////////////////////////////
// List and describe each individual piece of syntax that we use to construct an object. Don't leave anything out! The list is finite.
//
// Example:
//
// {} curly braces define the object.



// 28. Me //////////////////////////////////////////////////////////////////////
// Create an empty object called me.
// Assign it properties for name, age, and email with corresponding values.
// The object would look something like this if we console logged it:
//
// console.log(me);
// => {name: "Kristyn", age: 98, email: "kristyn@foo.bar"}
//
// Using dot notation, access the name property in your object.
// Without writing directly into the object, update the value of age to be 1000 years old.
// Using dot notation, verify that age has been updated.
// Add a key to this object called: "place of residence" and give it a value of your hometown. Note that the key has spaces, therefore you cannot use dot notation.
// Access the value of "place of residence"



// 29. Slimer //////////////////////////////////////////////////////////////////
// const monster = {
//    name: "Slimer",
//    color: "greenish",
//    type: "plasm or ghost or something"
// }
// Given the slimer object:
// What would you write to access the name and console.log it?
// What would you write to change the type to 'creature' (without changing it inside the object)
// What would you write to add a key to the object called age, and set the age to 6?
// console.log the object to make sure type is creature, and age is 6



// 30. Ogres  //////////////////////////////////////////////////////////////////
// Let's say you want to make an adventure game where you are an adventurer and you are going to fight ogres.
//
// Using objects, create models and have them interact.
//
// how would you model your adventurer? Your adventurer will want a name and hitpoints. What else would your adventurer need?
//
// how would you model an ogre? Your ogre will want hitpoints.
//
// Write a very small program that will simulate a battle between your adventurer and an ogre.
//
// When your adventurer's hitpoints reach 0 the game is over.
// When your ogre's hitpoints reach 0 the game is over.
// If you want to provide input to the game, you can run it in the Chrome console (but that isn't strictly necessary for now).
