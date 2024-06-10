function makeSandwich(...items: string[])
{
    console.log("\nMaking a sandwich with following items\n");

items.forEach(singleItem => console.log(singleItem))

console.log ("\nSandwich is ready\n")
}


makeSandwich("chicken", "cheese", "egg");
makeSandwich("bread", "butter");
makeSandwich("chicken", "mayo", "onion", "cheese")