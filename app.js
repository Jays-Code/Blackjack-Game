//Card Deck creation help http://www.thatsoftwaredude.com/content/6196/coding-a-card-deck-in-javascript

let deck = []
let cardSuits = ["S", "D", "C", "H"];
let cardValues = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let cardWorth = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];


function getDeck() {
    let newDeck = []

    for (let i = 0; i < cardSuits.length; i++) {
        for (let x = 0; x < cardValues.length; x++) {
            let card = {
                path: "cardImages/" + cardValues[x] + cardSuits[i] + ".jpg",
                Suit: cardSuits[i],
                Value: cardValues[x],
                Worth: cardWorth[x]
            };
            newDeck.push(card);

        }
    }
    return newDeck;
}

deck = getDeck();

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

        let newArray1 = [];
        for (let i = 0; i < cardsToDeal; i++) {
            (deck[deck.length - 1].Worth);
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

(dealCardsPlayer(2))
shuffleDeck()

//--------Player deal handled above, dealer deal handled below

let dealerScore = 0;
function dealCardsDealer(cardsToDeal) {
    //NOTE: card is only random if function shuffleDeck is run prior to this
    for (let i = 0; i < cardsToDeal; i++) {
        let suit = document.createElement("div");
        let card = document.createElement("div");
        let value = document.createElement("div");

        let newArray2 = [];
        for (let i = 0; i < cardsToDeal; i++) {
            (deck[deck.length - 1].Worth);
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

(dealCardsDealer(2))

let br = document.createElement('br');

//$("#points1").text((deck[0].Worth) + (deck[1].Worth))
$("#points1").text(dealerScore)
$("#points2").text(playerScore)

if (playerScore === 21) {
    $("#gameMessages").append("You've hit Blackjack! ");
}
if (dealerScore === 21) {
    $("#gameMessages").append("Dealer has hit Blackjack! ");
}

//Button functions
$(".btn.btn-primary").click(function () {
    console.log(playerScore);
    //shuffleDeck()
    let card = dealCardsPlayer(1)
    console.log(card);
    console.log(playerScore)
    console.log(card[0].Worth)
    $("#points2").text(playerScore)
    if (playerScore === 21) {
        $("#gameMessages").append("You've hit Blackjack! ");
    }
    if (playerScore > 21) {
        $("#gameMessages").append("You've gone bust!")
        $("#gameMessages").after("Dealer has won!")
    }
    if (dealerScore === 21 && playerScore === 21) {
        $('button').prop('disabled', true);
        $("#gameMessages").after("It is a tie!")
    }
})

$(".btn.btn-secondary").click(function () {
    // $("#gameMessages").append("Player chose to stand")
    //Removing text that was appended https://api.jquery.com/empty/
    /*
    setTimeout(function() {
        $("#gameMessages").empty();
      }, 3000);
      */

    //disabled hit button when stand button is pressed, resource https://stackoverflow.com/questions/8685107/hiding-a-button-in-javascript
    $('button').prop('disabled', true);
    console.log(playerScore);
    //shuffleDeck()
    let card = dealCardsDealer(1)
    console.log(card);
    console.log(dealerScore)
    console.log(card[0].Worth)
    $("#points1").text(dealerScore)
    if (dealerScore === 21) {
        $("#gameMessages").append("Dealer has hit Blackjack! ");
    }
    if (dealerScore > 21) {
        $("#gameMessages").append("Dealer has gone bust!")
        //was .after above, but changed. Keep if see no issue.
    }
    while (dealerScore < 17) {
        let card = dealCardsDealer(1)
        console.log(card);
        console.log(dealerScore)
        console.log(card[0].Worth)
        $("#points1").text(dealerScore)
        if (dealerScore === 21) {
            $("#gameMessages").append("Dealer has hit Blackjack!");
            $("#gameMessages").after(br);
        }
        if (dealerScore > 21) {
            $("#gameMessages").append("Dealer has gone bust!")
            $("#gameMessages").after(br);
        }
        while (dealerScore < 17) {
            dealCardsDealer(1)
            if (dealerScore > playerScore && dealerScore < 22) {
                $("#gameMessages").after("Dealer has won")
                if (dealerScore < playerScore) {
                    $("#gameMessages").append("Player has won!")
                    $("#gameMessages").after(br);
                }
            }
        }
    }
    if (dealerScore === playerScore) {
        $("#gameMessages").after("It is a tie!")
    }
    if (dealerScore > playerScore && dealerScore < 22) {
        $("#gameMessages").after("Dealer has won")
        if (dealerScore < playerScore) {
            $("#gameMessages").append("Player has won!")
            $("#gameMessages").after(br);
        }
    }

    if (dealerScore > playerScore && dealerScore > 21) {
        $("#gameMessages").after("Player has won!")
        $("#gameMessages").after(br);
    }
    if (dealerScore < playerScore) {
        $("#gameMessages").append("Player has won!")
        $("#gameMessages").after(br);
    }
})


