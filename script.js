//Week 9 Assignment: Crreate an automated version of the classic card game WAR!
//
// Class for the deck of cards containing the suits, ranks, and method to create a deck of 52 cards.
class Deck {
    constructor() {
        this.deck = []
        this.cardSuits = ["Spades 🗡️", "Hearts ❤️", "Diamonds 💎", "Clubs 🍀"]
        this.cardRanks = [
            "Ace",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "Jack",
            "Queen",
            "King"
            ]
    }
    //Create a deck of cards using the 4 suits and 13 ranks.
    createDeck() {
        for (let i = 0; i < this.cardSuits.length; i++) {
            for (let j = 0; j < this.cardRanks.length; j++) {
                let card = {
                    name: `${this.cardRanks[j]} of ${this.cardSuits[i]}` ,
                    value: j + 1
                }
                this.deck.push(card);
                
            }
        }
    }

    // Shuffle the deck of cards using the Fisher-Yates Shuffle algorithm 
    shuffleDeck() {
        for (let i = this.deck.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));

            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
        }
    }

}

//Class for the game to run with two players.
class Game {
    //Create two players and ask the user to enter their names
    constructor() {
        let name1 = prompt(`Enter the name of Player 1: `)
        let name2 = prompt(`Enter the name of Player 2: `)
        this.player1 = {
            name: name1,
            score: 0,
            hand: []
        }
        this.player2 = {
            name: name2,
            score: 0,
            hand: []
        }
    }

    playGame() {
        //Create a new deck for the game and give each player their cards
        const gameDeck = new Deck;
        gameDeck.createDeck();
        gameDeck.shuffleDeck();

        while(gameDeck.deck.length !== 0) {
            this.player1.hand.push(gameDeck.deck.shift())
            this.player2.hand.push(gameDeck.deck.shift())
        }
        //Compare the cards the players have during each turn; WAR!
        for(let i = 0; i < this.player1.hand.length; i++) {
            if (this.player1.hand[i].value > this.player2.hand[i].value) {
                this.player1.score ++
                console.log (`
                    ${this.player1.name}'s Card: ${this.player1.hand[i].name}
                    ${this.player2.name}'s Card: ${this.player2.hand[1].name}
                    ${this.player1.name} wins this round!
                    Current score: ${this.player1.name}: ${this.player1.score}, ${this.player2.name}: ${this.player2.score}
                    `)
            } else if (this.player2.hand[i].value > this.player1.hand[i].value) {
                this.player2.score ++
                console.log (`
                    ${this.player1.name}'s Card: ${this.player1.hand[i].name}
                    ${this.player2.name}'s Card: ${this.player2.hand[1].name}
                    ${this.player2.name} wins this round!
                    Current score: ${this.player1.name}: ${this.player1.score}, ${this.player2.name}: ${this.player2.score}
                    `)

            } else {
                console.log (`
                    ${this.player1.name}'s Card: ${this.player1.hand[i].name}
                    ${this.player2.name}'s Card: ${this.player2.hand[1].name}
                    Tie! No points awarded this round. 
                    Current score: ${this.player1.name}: ${this.player1.score}, ${this.player2.name}: ${this.player2.score}
                    `)
            }

        } 
    // Compare the scores and declare a winner (or tie)
    if (this.player1.score > this.player2.score) {
        console.log(`${this.player1.name} Wins!
        FINAL SCORE: ${this.player1.name}: ${this.player1.score}
                     ${this.player2.name}: ${this.player2.score}
        `)
    } else if (this.player2.score > this.player1.score) {
        console.log(`${this.player2.name} Wins!
        FINAL SCORE: ${this.player1.name}: ${this.player1.score}
                     ${this.player2.name}: ${this.player2.score}
        `)
    } else {
        console.log(`It's a Tie!
        FINAL SCORE: ${this.player1.name}: ${this.player1.score}
                     ${this.player2.name}: ${this.player2.score}
        `)
    }

    }

}

const game = new Game;
game.playGame()



