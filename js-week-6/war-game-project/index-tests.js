const expect = chai.expect;

describe("WarGamesFunctions", function(){
    describe("#showCard", function(){
        it("should return the suit and value of the card", function(){
            let c = new Card("clubs", 9);
            expect(c.showCard()).to.equal("Suit: clubs, Value: 9");
        })
    })

    describe("#showPlayers", function(){
        it("should return the suit and value of the card", function(){
            let p = new Player("Joe");
            expect(p.showPlayer()).to.equal("Joe");
        })
    })
})