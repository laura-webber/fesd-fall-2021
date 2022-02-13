class Card {
 //suit, value, rank
 constructor(suit, rank, value) {
  this.suit = suit;
  this.rank = rank;
  this.value = value;
  }
}

//console.log(new Card("Heart", 'A', 14));
class Deck {
  constructor() {
    this.myCards;
    this.createDeck();
    this.shuffleDeck();
  }
  createDeck() {
    this.myCards = [];
    let suit = ["Spade", "Club", "Heart", "Diamond"];
    let rank = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let value = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    //console.log(suit);
    //console.log(rank);
    //console.log(value);
    for (let i = 0; i < suit.length; i++) {
      for (let j = 0; j < value.length; j++) {
        this.myCards.push(new Card(suit[i], rank[j], value[j]));
      }
    }
    //console.log(this.myCards);
  }
  shuffleDeck() {
    let shuffle = this.myCards.length;
    for (let i = 0; i < shuffle; i++) {
      let j = Math.floor(Math.random() * shuffle);
      let tmp = this.myCards[i];
      this.myCards[i] = this.myCards[j];
      this.myCards[j] = tmp;
    }
  }
}
class Player {
  constructor (pName) {
  this.name = pName;
  this.playerCards = [];
  }
}

function deal(cards, player1, player2) {
  player1.playerCards.push(cards.myCards.slice(0, 26));
  player2.playerCards.push(cards.myCards.slice(26, 52))
}

//We need players
//let bootcamp = [];
//bootcamp.push(new Player("player1"));
//bootcamp.push(new Player("player2"));
//Deal the cards, hope for the best
//deal(testDeck, bootcamp[0], bootcamp[1]);
//console.log(bootcamp);
//console.log(bootcamp[0].playerCards[0].length);



let player1 = new Player("Joe");
let player2 = new Player("Mary");
let deck = new Deck();

deal(deck, player1, player2);

console.log(player1.playerCards);
console.log(player2.playerCards);