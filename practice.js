
// ==================================
// JAVASCRIPT PRACTICE - 10 PROBLEMS
// ==================================


// 1. VARIABLES: Store your name, age and city

const myName = "Toyibah";
const myAge = 26;
const myCity = "Ede";

console.log("My name is " + myName + 
    ", I am " + myAge + " years old, and I live in " + myCity + ".");


// 2. YOUR AGE IN 10 YEARS

const futureAge = myAge + 10;

console.log("In 10 years, I will be " + futureAge + " years old.");


// ==================================
// MATHS
// ==================================


// 3. Convert 32°C to Fahrenheit

const celsius = 32;
const fahrenheit = (celsius * 9/5) + 32;

console.log("32°C in Fahrenheit is " + fahrenheit + "°F");


// 4. Area of a rectangle

const length = 10;
const width = 6;

const area = length * width;

console.log("The area of the rectangle is " + area);


// 5. Calculate a 10% tip on ₦15,000

const bill = 15000;
const tip = bill * 0.10;

console.log("The 10% tip is ₦" + tip);


// 6. Split ₦24,000 between 4 people

const totalBill = 24000;
const people = 4;

const amountPerPerson = totalBill / people;

console.log("Each person will pay ₦" + amountPerPerson);


// ==================================
// COMPARISON
// ==================================


// 7. Is 18 greater than your age?

console.log("Is 18 greater than my age?");
console.log(18 > myAge);


// 8. Is "5" equal to 5?

console.log("Using double equals:");
console.log("5" == 5);

console.log("Using triple equals:");
console.log("5" === 5);


// ==================================
// DATA TYPES
// ==================================


// 9. Print the type of five values

console.log(typeof 25);
console.log(typeof "Jollof King");
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof { food: "Jollof Rice" });


// 10. Check that JavaScript is working

console.log("My JavaScript assignment is working!");
