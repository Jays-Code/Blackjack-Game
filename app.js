
            
//Card Deck creation help http://www.thatsoftwaredude.com/content/6196/coding-a-card-deck-in-javascript

let deck = new Array();
let cardSuits= ["spades", "diamonds", "clubs", "hearts"];
let cardValues = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
//let cardValues = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
   //attach cardValues to cardNames
   
function getDeck () 
{
    let deck = new Array();
    for (i = 0; i < cardSuits.length; i++) 
    {
        for (x = 0; x < cardValues.length; x++) 
        {
            let card = {Value: cardValues[x], Suit: cardSuits[i]};
            deck.push(card);

        }
    }
    return deck;    
}


//Shuffling the deck of cards
function shuffleDeck()
{
	
	for (i = 0; i < 500; i++)
	{
		var location1 = Math.floor((Math.random() * deck.length));
		var location2 = Math.floor((Math.random() * deck.length));
		var tmp = deck[location1];

		deck[location1] = deck[location2];
		deck[location2] = tmp;
	}
}

