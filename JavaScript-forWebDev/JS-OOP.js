const s1 = "Hello";
console.log(typeof s1);

const s2 = new String("Hello");
console.log(typeof s2);

console.log(window);
alert("Stop there!");

console.log(navigator.appVersion);


// Object Literal
const book1 = {
    title: 'Book One',
    author: 'John Doe',
    year: '2013',
    getSummary: function(){
        return `${this.title} was written by ${this.author} in ${this.year}.`;
        }
};

console.log(book1.getSummary());

console.log(Object.values(book1));
console.log(Object.keys(book1));

// Constructors

function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;

    this.getSummary = function() {
        return `${this.title} was written by ${this.author} in ${this.year}.`;
    }
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
console.log(book3.year);


// Magazine Constructor
function Magazine(title, author, year, month){
    Book.call(this, title, author, year);

    this.month = month;
}

// Instantiate Magazine Object
// Inherit Prototype
Magazine.prototype = Object.create(Book.prototype);
const mag1 = new Magazine('Mag One', 'Jon Chall', 2018, 'Jan');


// If you want to use Magazine Constructor
Magazine.prototype.constructor = Magazine;

console.log(mag1);

// Object of Protos

const bookProtos = {
    getSummary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}.`;
    },
    getAge: function(){
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old.`;
    }
}

// Create objects
const book1 = Object.create(bookProtos);
book1.title = 'Book One';
book1.author = 'John Doe';
book1.year = 2015;

const book1 = Object.create(bookProtos, {
    title: { value: 'Book One' },
    author: { value: 'John Doe' },
    year: { value: 2014 },
});

console.log(book1);

// Classes

class Book{
    constructor(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary() {
        return `${this.title} was written by ${this.author} in ${this.year}.`;
    }

    getAge(){
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old.`;
    }

    revise(newYear){
        this.year = newYear;
        this.revised = true;
    }

    // static method
    static topBookStore(){
        return "Barnes and Noble";
    }
}

// Instantiate an object with classes
const myBook = new Book('Book One', 'Jon Chall', 2019);
console.log(myBook.getAge());
myBook.revise(2017);
console.log(myBook.getAge());


console.log(Book.topBookStore()); // Call static method using the class not object


// Magazine subclass

class Magazine extends Book {
    constructor(title, author, year, month) {
        super(title, author, year);
        this.month = month;
    }
}

// Instatiate Magazine

const mag2 = new Magazine('Mag Two', 'Jane Doe', 2018, 'Jan');

console.log(mag2.getSummary()); // Able to use function that belongs to parent

// Subclasses easier to use than inheritance and prototypes





