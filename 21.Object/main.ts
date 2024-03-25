interface Book{bookName : String;
     Author : String; 
     yearPublished: number;
} 
let Book = {
    bookName :"The Alchemist",
    Author : "Paulo Coelho",
    yearPublished : 1988,
};
console.log(`Book info: ${Book.bookName} by ${Book.Author} in ${Book.yearPublished}`);