let alien_color: string = "green";
//version that pass
if (alien_color === "green"){
    console.log("Player just earned 5 points.");
};
//version that fail
if(alien_color === "white"){
    console.log("Player just earned 10 points.");
}