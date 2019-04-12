//Card Deck creation help http://www.thatsoftwaredude.com/content/6196/coding-a-card-deck-in-javascript

let deck = []
let cardSuits = ["S", "D", "C", "H"];
let cardValues = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let cardWorth = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];

function getDeck() {
    let newDeck = []
    //let deck = new Array();
    for (let i = 0; i < cardSuits.length; i++) {
        for (let x = 0; x < cardValues.length; x++) {
            let card = {
                path: "cardImages/" + cardValues[x] + cardSuits[i] + ".jpg",
                Suit: cardSuits[i],
                Value: cardValues[x],
                Worth: cardWorth[x]
            };
            newDeck.push(card);
            //console.log(deck);
        }
    }
    return newDeck;
}

deck = getDeck();
console.log("console logged the deck below")
console.log(deck)



//Shuffling the deck of cards
function shuffleDeck() {

    for (let i = 0; i < 500; i++) {
        let holder1 = Math.floor((Math.random() * deck.length));
        let holder2 = Math.floor((Math.random() * deck.length));
        var temp = deck[holder1];

        deck[holder1] = deck[holder2];
        deck[holder2] = temp;
    }
    return deck;
}
shuffleDeck()
console.log("console logged shuffled deck below")
console.log(deck)

let playerScore = 0;
function dealCardsPlayer(cardsToDeal) {
    //NOTE: card is only random if function shuffleDeck is run prior to this
    for (let i = 0; i < cardsToDeal; i++) {
        let suit = document.createElement("div");
        let card = document.createElement("div");
        let value = document.createElement("div");

        suit.className = "suit " + deck[i].suit;
        card.className = "card";
        value.className = "value";


        value.innerHTML = deck[i].Value;
        card.appendChild(value);
        card.appendChild(suit);

        //$(".cardPlaceholder").append(card);
        
        /*
        let newArray1 = [];
        for (let i = 0; i < cardsToDeal; i++) {
            newArray1.push(deck.pop());
            let displayedCard = $('<img></img>').attr("src", deck[i].path);
        $(".playersCards").append(displayedCard);
        displayedCard.addClass("cardFormat");
            //(OLD)check the variable "card" listed above, see what you're really referencing.
        */
        let newArray1 = [];
        for (let i = 0; i < cardsToDeal; i++) {
            console.log(deck[deck.length - 1].Worth);
            playerScore += deck[deck.length - 1].Worth;
            let lastCard = deck.pop();
            newArray1.push(lastCard);
            let displayedCard = $('<img></img>').attr("src", lastCard.path);
            $(".playersCards").append(displayedCard);
            displayedCard.addClass("cardFormat");   
        }
        return newArray1
    }

}
console.log("deal card function below")
console.log(dealCardsPlayer(2))
console.log(deck)
shuffleDeck()

//--------Player deal handled above, dealer deal handled below (same code)
let dealerScore = 0;
function dealCardsDealer(cardsToDeal) {
    //NOTE: card is only random if function shuffleDeck is run prior to this
    for (let i = 0; i < cardsToDeal; i++) {
        let suit = document.createElement("div");
        let card = document.createElement("div");
        let value = document.createElement("div");
/*
        suit.className = "suit " + deck[i].suit;
        card.className = "card";
        value.className = "value";


        value.innerHTML = deck[i].Value;
        card.appendChild(value);
        card.appendChild(suit);

        //$(".cardPlaceholder").append(card);
        */

        let newArray2 = [];
        for (let i = 0; i < cardsToDeal; i++) {
            console.log(deck[deck.length - 1].Worth);
            dealerScore += deck[deck.length - 1].Worth;
            let lastCard = deck.pop();
            newArray2.push(lastCard);
            let displayedCard = $('<img></img>').attr("src", lastCard.path);
            $(".dealersCards").append(displayedCard);
            displayedCard.addClass("cardFormat");
            //(OLD)check the variable "card" listed above, see what you're really referencing.
           
        }
        return newArray2
    }

}
console.log("deal card function below")
console.log(dealCardsDealer(2))
console.log(deck)

//$("#points1").text((deck[0].Worth) + (deck[1].Worth))
$("#points1").text(dealerScore)
$("#points2").text(playerScore)
//Have an object for the player, and one for the dealer. Have the dealCard function 
//console.log(newArray)

//console.log(newArray)


//Will have to attach dealCard function to a hit button. Also dealCard will go at start of the game
//dealCard(2)

//dealCard()

//return newArray


//Making the cards show when they are called
//function displayCards

/* duplicated code, can delete
let displayedCard = $('<img></img>').attr("src", deck[0].path);
$(".playersCards").append(displayedCard);
displayedCard.addClass("cardFormat");
*/

//Button functions
$(".btn.btn-primary ").click(function () {
    shuffleDeck()
    console.log(dealCardsPlayer(1))
})

$(".btn.btn-secondary ").click(function () {
    alert("stand button has been hit")
})






//--------------
        //collaborated with Michael Lin to work out card image reference inclusion

/*
for (let i = 0; i < cardValues.length; i++) {
    for (let j = 0; j < cardSuits.length; j++) {
        deck.push({
            path: "Images/" + cardValues[i] + cardSuits[j] + ".jpeg",
           // BRING BACK THESE LINES AND SOLVE SEMICOLON ERROR
           //cardValue: cardValues[i];
           //cardWorth: cardWorth[j];

        });
    }
    //told cardSuits may not be defined within function
    let cardImage = $("<img></img>").attr("src", deck[i].path);
$(".cardPlaceholder").append(cardImage);
}
*/

    //cardValues:

/*---------------OLD renderDeck function before changed to pickCard to handle one card and not whole deck


function pickCard() {
//NOTE: card is only random if function shuffleDeck is run prior to this
    for (let i = 0; i < deck.length; i++) {
        let suit = document.createElement("div");
        let card = document.createElement("div");
        let value = document.createElement("div");

        suit.className = "suit " + deck[i].suit;
        card.className = "card";
        value.className = "value";


        value.innerHTML = deck[i].Value;
        card.appendChild(value);
        card.appendChild(suit);

        //$(".cardPlaceholder").append(card);
        let displayedCard = $('<img></img>').attr("src", deck[i].path);
        $(".playersCards").append(displayedCard);
        displayedCard.addClass("cardFormat");
    }
}

pickCard()
*/