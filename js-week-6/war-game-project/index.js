//console.log("hello world!");

class Card {
    constructor(suit, value){
        this.suit = suit;
        this.value = value;
        this.player = "";
    }
    showCard(){
        return `Suit: ${this.suit}, Value: ${this.value}`;
    }
}

//let c = new Card("clubs", 9);
//console.log(c.showCard());

class Deck {
    constructor(){
        this.cards = [
            //fill the deck with Card objects of the
            //appropriate suit and value
        ];
    }
    removeCard(card){

    }
    showDeck(){
        return this.cards;
    }
    dealCards(){
        
    }
}

class Player {
    constructor(name){
        this.name = name;
    }
    showPlayer(){
        return this.name;
    }
}

class Game {
    constructor(){

    }
    startGame(){

    }
    compareScore(){

    }
    endGame(){

    }
    createPlayers(){

    }
}

let player1 = new Player("Joe");
let player2 = new Player("Rose");




