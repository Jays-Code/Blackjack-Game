
            
//Card Deck creation help http://www.thatsoftwaredude.com/content/6196/coding-a-card-deck-in-javascript

let deck = []
let cardSuits= ["spades", "diamonds", "clubs", "hearts"];
let cardValues = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
//let cardValues = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
   //attach cardValues to cardNames
   
function getDeck () 
{
    let newDeck = []
    //let deck = new Array();
    for (let i = 0; i < cardSuits.length; i++) 
    {
        for (let x = 0; x < cardValues.length; x++) 
        {
            let card = {Value: cardValues[x], Suit: cardSuits[i]};
            newDeck.push(card);
            //console.log(deck);
        }
    }
    return newDeck;    
}

deck = getDeck();
//console.log(deck)


//Shuffling the deck of cards
function shuffleDeck()
{
	
	for (let i = 0; i < 500; i++)
	{
		let holder1 = Math.floor((Math.random() * deck.length));
		let holder2 = Math.floor((Math.random() * deck.length));
		var temp = deck[holder1];

		deck[holder1] = deck[holder2];
		deck[holder2] = temp;
    }
    return deck;
}




function renderDeck()
{
      $("#deck").innerHTML = "";

	for(let i = 0; i < deck.length; i++)
	{
        let suit = document.createElement("div");
		let card = document.createElement("div");
		let value = document.createElement("div");
        
        suit.className = "suit " + deck[i].suit;
		card.className = "card";
		value.className = "value";
		

		value.innerHTML = deck[i].Value;
		card.appendChild(value);
		card.appendChild(suit);

		$("#deck").appendChild(card);
	}
}

