//console.log("hello");

class Player {
    constructor(name){
        this.name = name;
        this.hand = [];
    }
    sayName(){
        //return name
        return `name is ${this.name}`;
    }
    showHand(){
        //return whole hand
        return [ ];
    }
    playCard(){
        //return random card from hand
    }
}

class Card {
    constructor(suit, value){
        this.suit = suit;
        this.value = value;
        this.player = 0;
    }
    showCard(){
        return `suit: ${this.suit}, value: ${this.value}`;
    }
}

class Deck {
    constructor(){
        this.cards = [
            

        ];
    }
    deal(){
        //return whole array with player key set to 1 or 2
        //evenly distributed
        return [

        ];
    }
}



let player1 = new Player("Joe");
let player2 = new Player("Mary");

player1.sayName();
player2.sayName();

