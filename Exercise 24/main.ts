// Test for equality and inequalty with string
let apple : string = "apple"
console.log("Testing equality with string");
console.log(apple == "apple");// true
console.log(apple == "Apple");//false

//tests using lower case function
console.log("\ntests using lower case function");
console.log("apple" == "Apple".toLowerCase());// true
console.log("apple" != "Apple".toLowerCase());//false

//Numerical tests
console.log("\nNumerical tests")
console.log(5 > 4);//true
console.log(5 > 10);//false

//Tests using "and" and "or"
console.log("\nTests using 'and' and 'or' operators");
console.log(10 != 10 && 20 > 10);//false
console.log(apple == "Apple" || apple == "apple"); //true

//Test whether an item is in array
let fruits = ["apple", "orange", "cherry"];
console.log("\nIs 'orange' in fruits");
console.log(fruits.includes("orange")); //true

//Test whether an iteam is not in array
console.log("Is 'mango' is in fruits");
console.log(fruits.includes("mango")); //false


