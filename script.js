console.log(`Testing...Testing...1, 2, 3`)

// Class for the deck of cards containing the suits, rank, and method to create a deck of 52 cards.
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

const gameDeck = new Deck;
gameDeck.createDeck();
gameDeck.shuffleDeck();

console.log(gameDeck.deck);

