
            
//Card Deck creation help http://www.thatsoftwaredude.com/content/6196/coding-a-card-deck-in-javascript

let cardDeck = new Array();
let cardSuits= ["spades", "diamonds", "clubs", "hearts"];
let cardNames = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
//let cardValues = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
   //attach cardValues to cardNames
function getCardDeck () 
{
    let deck = new Array();
    for (i = 0; i < cardSuit.length; i++) 
    {
        for (x = 0; x < cardValues.length; x++) 
        {
            let card = {Name: cardNames[x], Suit: suits[i]};
            deck.push(card);

        }
    }
    return deck;    
}

