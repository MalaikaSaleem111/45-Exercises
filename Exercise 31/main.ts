//No user

let userName : string[] =["Sana", "Dua", "Admin", "Hira", "Mehak"];
userName = []
if (userName.length === 0){
    console.log("we need to find some user.")
}
userName.forEach(user_name => {
    if(user_name === "Admin"){
        console.log("Hello Admin, would you like to see a status report?")
    }
    else{
        console.log(`Hello ${user_name}, thank you for logging in again`)
    }
})