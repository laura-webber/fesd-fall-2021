const expect = chai.expect;

describe("WarFunctions", function(){
    describe("#sayName", function(){
        it("should say the name of the player", function(){
            let p = new Player("Robert");
            expect(p.sayName()).to.equal("name is Robert");
        })
    })
    describe("#showCard", function(){
        it("should show the suit and value of the card", function(){
            let c = new Card("clubs", 9);
            expect(c.showCard()).to.equal("suit: clubs, value: 9");
        })
    })
})