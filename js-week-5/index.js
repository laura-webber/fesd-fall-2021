//book & bookshelf

class Entity {
    constructor(t, a){
        this.name = t;
        this.owner = a;
    }
    getInfo(){
        console.log(`Name: ${this.title} Owner: ${this.author}`);
    }
}

class Animal {
    constructor(){
        //
    }
    //methods
    breathe(){

    }
    move(){

    }
    
    eat(){

    }

    makeNoise(){
        conso
    }
}

class Cat extends Animal {
    makeNoise(){

    }
}



//Object - 'instance of a class' - thing built from the blueprint - cookie
//Class - blueprint for how to make an object - define our properties and functionality - cookie cutter



class Bookshelf {
    constructor(){
        myBookshelf.addBook(book1);
    }

    addBook(bookObj){
        //add bookObj to this.books array
            this.books.push(bookObj);
    }

    removeBook(index){
        //remove book at index from the array
    }

    listBooks(){
        console.log(this.books);
    }

    
}

let myBookshelf = new Bookshelf();
let book1 = new Book("Evergreen", "Francis Bacon");
let book2 = new Book("Tintin", "Herge");
let book3 = new Book("Scrum", "Fred Wilson");
myBookshelf.addBook(book1);
myBookshelf.addBook(book2);
myBookshelf.addBook(book3);
myBookshelf.listBooks();