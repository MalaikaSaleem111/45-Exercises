//Q 16 Answer
let guestList = ["Sara", "Sana", "Dua", "Mehak"];
console.log("Good News! I found a bigger dinner table.");
//guest to the beginning of array
guestList.unshift("Kanwal");
//guest to the end of array
guestList.push("Laiba");
//guest to the middle of array
guestList.splice(guestList.length / 2, 0, "Naima");
guestList.forEach(guest => { console.log(`Dear ${guest}, would yo like to join me for dinner?`); });
//Q 17 Answer
console.log("Unfortunately, I can only invite two people for dinner");
while (guestList.length > 2) {
    let removedGuest = guestList.pop();
    console.log(`Sorry ${removedGuest} I can't invite you to dinner`);
}
guestList.forEach(guest => {
    console.log(`Dear ${guest} you are still invited to dinner`);
});
// remove last two guests from list
guestList.pop();
guestList.pop();
console.log(guestList); //shows an empty list
export {};
