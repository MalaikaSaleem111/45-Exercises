//checking username
var current_user = ["Saba", "Sehar", "Aiman", "Laiba", "Dua"];
var new_user = ["Kanwal", "Hira", "Laiba", "Sara", "Dua"];
new_user.forEach(function (newUser) {
    if (current_user.some(function (currentUser) { return currentUser.toLowerCase() === newUser.toLowerCase(); })) {
        console.log("".concat(newUser, " will need to enter a new username"));
    }
    else {
        console.log("".concat(newUser, " is available"));
    }
});
