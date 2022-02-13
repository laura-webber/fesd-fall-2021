

Object Oriented Programming (OOP)

- What are objects?
- What is there besides OOP?

- Procedural
    - a list of instructions / linear
    - GOTO line 45 repeat until 90 - subroutine

- C++, Java 
    book 
        { 
            title: "Snowbird",
            author: "Jack Frost",
            publication date: 1990
            printAllInfo: function prints all the info
        }

    Movie Theater Program

    TicketVending
        Ticket
    Movies
        Movie
    Concession
        Popcorn
        Cola

    have our program model reality



Practice:
Book < Bookshelf
Song < Playlist
Recipe < Cookbook


Q1: Explain the following concepts:
- Class - blueprint/cookie cutter from which you can create many objects
- Abstraction - process of creating a generic chunk of code that can be applied in a wide
variety of situations. 
- Encapsulation - once an object is created, the details are hidden away and we can
use the object w/out having to see what's in the class.
    - Array - Global object - .push, .splice
- Inheritance - the way a subclass (or a child class) can inherit the properties and functionality of a parent class- saves time and space
- Polymorphism - 




Q2:
You are working for an event scheduling company and were asked to create something that helps organize events better. The app you are working on already has an Event class as follows:

class Event {
  constructor(title, date) {
    this.title = title; //string
    this.date = date; //string
  }
}

Your task is to create a class named EventOrganizer that contains a property called events (an array of Events) and two methods: addNewEvent, and removeEvent.
addNewEvent should take an event and add it to the events array ONLY if an event with the same title doesn't exist already.
removeEvent should take a string representing the event title and remove the event with the matching title.



PRACTICE
//console.log('hi there, how are you?')

class Team {
    constructor(name){
        this.name = name;
        this.players = [];
    }
    sayName(){
        console.log(`This team's name is ${this.name}`);
    }
    
    addPlayer(player){
        this.players.push(player);
    }
}


class Person {
    constructor(name){
        this.name = name;
    }

    sayName(){
        console.log(`Hi, my name is ${this.name}`);
    }
}

class Player extends Person {
    constructor(name){
        super(name);
    }
}

let bob = new Person('bob');
let sharks = new Team('sharks');
sharks.addPlayer(new Player('sally'));

console.log(bob.sayName());
console.log(sharks.sayName());
console.log(sharks.players);


