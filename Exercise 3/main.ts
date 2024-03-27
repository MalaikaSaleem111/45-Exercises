//Name cases:store name in variable and print name in lowercase, uppercase and titlecase
let personName: string = "Malaika"
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(personName.replace(/\bw/g,c => c.toUpperCase()));