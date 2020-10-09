const readlineSync = require("readline-sync");

// Get the total amount of the bill. Wait for user's response.
const totalAmount = readlineSync.questionFloat("What's the total amount of the bill: $");
// console.log('Hi ' + userName + '!');

// Get the party size from the user
const totalPartySize = readlineSync.questionInt("How many people are you in the party? ")

// Get the % of the tip from the user
const tipPercentage = readlineSync.questionsFloat("What % would you like to tip? ")

// Repeat all of those things back to the user.
console.log(typeof totalAmount);
console.log(typeof totalPartySize);
console.log(typeof tipPercentage);

// The bill tip is the tipPercentage divided by 100

// Total bill is the bill plus the tip


//Get total amount of the bill divided by the # of people


//Calculate how much everyone is paying