//checking username
let current_user : string[] =["Saba", "Sehar","Aiman","Laiba","Dua"];
let new_user : string[] =["Kanwal", "Hira", "Laiba", "Sara", "Dua"];
new_user.forEach(newUser =>{
    if(current_user.some(currentUser => currentUser.toLowerCase() === newUser.toLowerCase())){
        console.log(`${newUser} will need to enter a new username`)
    }else{
        console.log(`${newUser} is available`)
    }
})