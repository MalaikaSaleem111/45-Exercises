"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Hello admin
let userName = ["Sana", "Dua", "Admin", "Hira", "Mehak"];
userName.forEach(user_name => {
    if (user_name === "Admin") {
        console.log("Hello Admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${user_name}, thank you for logging in again`);
    }
});
