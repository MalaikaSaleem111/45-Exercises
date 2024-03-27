let places = ["Turkey", "Paris", "Maldives", "Switzerland", "Iceland"];
//print array in original order
console.log("original order:", places);
//copy an original array
console.log("Alphabetical order:", [...places].sort());
//show that array is still in original order
console.log("original order:", places);
//print array in reverse alphabetical order without changing original list
console.log("Reverse order:", [...places].reverse());
// show array is still in original form
console.log("original order:", places);
//change the original array order
console.log("origianl array reverse:", places.reverse());
//back to original order
console.log("Back to original order:", places.reverse());
//change array in alphabeical order
console.log("Sorted in alphabetical order:", places.sort());
//change array in reversed alphabetical order
console.log("Reverse alphabetical order:", places.reverse());
export {};
