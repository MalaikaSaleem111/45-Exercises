var personName = "Malaika";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
