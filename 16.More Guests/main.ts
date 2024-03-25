//Q 15 Answer
let guestList: string[] = ["Sara","Sana","Dua","Mehak"];
let unabletoAttend = "Sara";
console.log(`${unabletoAttend} can't make it for dinner.`);
let newGuest = "Hira";
guestList.forEach(guest => console.log(`Dear ${guest}, would yo like to join me for dinner?`));

//Q 16 Answer
console.log("Good News! I found a bigger dinner table.");
//guest to the beginning of array
guestList.unshift("Kanwal");

//guest to the end of array
guestList.push("Laiba");

//guest to the middle of array
guestList.splice(guestList.length/2, 0,"Naima");

guestList.forEach(guest => {console.log (`Dear ${guest}, would yo like to join me for dinner?`)});

