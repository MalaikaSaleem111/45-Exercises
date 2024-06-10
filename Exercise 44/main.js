function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking a sandwich with following items\n");
    items.forEach(function (singleItem) { return console.log(singleItem); });
    console.log("\nSandwich is ready\n");
}
makeSandwich("chicken", "cheese", "egg");
makeSandwich("bread", "butter");
makeSandwich("chicken", "mayo", "onion", "cheese");
