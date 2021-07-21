// const s1 = "Hello";
// console.log(typeof s1);

// const s2 = new String("Hello");
// console.log(typeof s2);

// console.log(window);
// alert("Stop there!");

// console.log(navigator.appVersion);


// Object Literal
// const book1 = {
//     title: 'Book One',
//     author: 'John Doe',
//     year: '2013',
//     getSummary: function(){
//         return `${this.title} was written by ${this.author} in ${this.year}.`;
//         }
// };

// console.log(book1.getSummary());

// console.log(Object.values(book1));
// console.log(Object.keys(book1));

// Constructors

function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;

    // this.getSummary = function() {
    //     return `${this.title} was written by ${this.author} in ${this.year}.`;
    // }
}

// create getSummary using prototype
Book.prototype.getSummary = function(){
    return `${this.title} was written by ${this.author} in ${this.year}.`;
};

// getAge
Book.prototype.getAge = function(){
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old.`;
};

// Revise / Change year
Book.prototype.revise = function(newYear){
    this.year = newYear;
    this.revised = true;
};

// Instantiate an Object
const book2 = new Book('Book One', 'John Doe', 2013);
const book3 = new Book('Book Two', 'Jane Doe', 2016);
console.log(book3.year);
book3.revise(2020);
console.log(book3.year)

