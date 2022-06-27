function Card (suit, rank) {
    this.suit = suit;
    this.rank = rank;
}
const deck = [];

function reset(){
    document.getElementById("dHand").innerHTML = "<div></div>";
    document.getElementById("pHand").innerHTML = "<div></div>";

    document.getElementById("dHandVal").innerHTML = "0";
    document.getElementById("pHandVal").innerHTML = "0";
    cardN = 0;
    bank = 1000;
    document.getElementById("bank").innerHTML = bank + " EC";
    document.getElementById("test").innerHTML = "Press deal to start round";



    deckSize = 52;
    suitSize = deckSize/4;
    let counter = 0;

    for(let i = 0; i < 4; i++) {

        cardSuit = i+1;

        for(let j = 0; j < suitSize; j++) {
        var card = new Card();
        card.suit = cardSuit;
        card.rank = j+1;
        deck[counter] = card;
        counter++;
        }
    }


    shuffle(deck);


    let out = "";

    for(let i = 0; i < deckSize; i++) {
        out+= deck[i].suit + " " + deck[i].rank + ",    ";
    }


}

function shuffle(){
    const shuffleDeck = deck => {
        for (let i = deck.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = deck[i];
          deck[i] = deck[j];
          deck[j] = temp;
        }
        return deck;
      };
      shuffleDeck(deck);
}

let roundActive = false;

let cardN = 0;
let bank = 1000;

let dHand = "";
let pHand = "";
let outHand = "";

let dHandVal = 0;
let pHandVal = 0;

let ace = false;
let dAce = false;
let aceHand = 0;
let dAceHand = 0;

let betAmount = 0;
let getAmount = 0;

let blackjack = false;
let playerBust = true;

let dHiddencard = true;

function bet(){
    getAmount = $("#bet").val();
    betAmount += +getAmount;
    bank += -+getAmount;
    document.getElementById("bank").innerHTML = bank + " EC";
}

function deal(){
    roundActive = true;
    betAmount = 0;
    bet();
    document.getElementById("test").innerHTML = "Round in progress";
    dHand = "";
    pHand = "";
    outHand = "";

    dHandVal = 0;
    pHandVal = 0;

    ace = false;
    dAce = false;
    aceHand = 0;
    dAceHand = 0;

    blackjack = false;
    playerBust = false;

    dHiddencard = true;

    drawPlayer();
    drawDealer();
    drawPlayer();
    drawDealer();
    
    printHand();
    let hiddenHand = "<h5>?</h5>" + outHand;

    document.getElementById("dHand").innerHTML = hiddenHand;
    document.getElementById("dHandVal").innerHTML = deck[cardN].rank;

    if (deck[cardN].rank === 1) {
        document.getElementById("dHandVal").innerHTML = "1 / 11";
    }

    if (pHandVal === 21 || aceHand === 21){
        blackjack = true;
        stand();
    }
}

function hit() {
    if (roundActive === true) {
    drawPlayer();
        if (pHandVal === 21 || aceHand === 21){
            document.getElementById("dHandVal").innerHTML = "21";
            stand();
            }
    }
    else {
        document.getElementById("test").innerHTML = "Press deal to start round";
    }
}


function double() {
    if (roundActive === true){
    bet();

    hit();
    stand();
    document.getElementById("bank").innerHTML = bank;
    }
    else {
        document.getElementById("test").innerHTML = "Press deal to start round";
    }
}

function stand() {
    if (roundActive === true){
    if (aceHand < 22 && ace === true) {
        pHandVal = aceHand;
        document.getElementById("pHandVal").innerHTML = pHandVal;
        if (blackjack === true){
            document.getElementById("pHandVal").innerHTML = "BLACKJACK!";
        }
    }
    dHiddencard = false;
    document.getElementById("dHand").innerHTML = dHand;
    if (dAceHand === 21) {
        dHandVal = dAceHand;
    }
    while (dHandVal < 17) {
    drawDealer();
    if (dAceHand === 21) {
        dHandVal = dAceHand;
        break;
    }
    }
    results();
    
}
else {
    document.getElementById("test").innerHTML = "Press deal to start round";
}
}


function results() {
    roundActive = false;
    document.getElementById("dHandVal").innerHTML = dHandVal;
    if (dHandVal > 21){
        document.getElementById("dHandVal").innerHTML = "BUST";
    }
    
    if (dHandVal === pHandVal || dHandVal === aceHand) {
        document.getElementById("test").innerHTML = "Push! Bet refunded!";
        bank += +betAmount;
        document.getElementById("bank").innerHTML = bank + " EC";
    }
    
    else if ((dHandVal > 21 || dHandVal < pHandVal) && (playerBust === false)) {
        document.getElementById("test").innerHTML = "You won! " + betAmount + " eskil-coins added to balance!";
            bank += +betAmount + +betAmount;
            if (blackjack === true){
                bank += +betAmount/2;
            }
            document.getElementById("bank").innerHTML = bank + " EC";

            
    }

    else if (dHandVal > pHandVal || playerBust === true) {
        document.getElementById("test").innerHTML = "You lose! " + betAmount + " eskil-coins removed from balance!";
    }
    throw new Error("Program has finsished");
}

function printHand() {
    if (deck[cardN].suit === 1){
        outHand = "♣ ";
        }
    else if (deck[cardN].suit === 2){
        outHand = "♦ ";
        }
    else if (deck[cardN].suit === 3){
        outHand = "♥ ";
        }
    else if (deck[cardN].suit === 4){
        outHand = "♠ ";
        }

        if (deck[cardN].rank === 1){
            outHand += "A";
            }
        else if (deck[cardN].rank < 11){
            outHand += deck[cardN].rank;
            }
            else if (deck[cardN].rank === 11){
                outHand += "J";
                }
                else if (deck[cardN].rank === 12){
                    outHand += "Q";
                    }
                    else if (deck[cardN].rank === 13){
                        outHand += "K";
                        }

                if (deck[cardN].suit === 2 || deck[cardN].suit === 3) {
                    outHand = "<h4>" + outHand + "</h4>";
                } else {
                    outHand = "<div>" + outHand + "</div>";
                }
    
}       


function drawDealer(){
    cardN += 1;

    printHand();
    dHand += outHand;

    if (dHiddencard === false) {
        document.getElementById("dHand").innerHTML = dHand;
    }

    if (deck[cardN].rank > 10) {
        dHandVal += 10;
        dAceHand += 10;
    }
    
    
    else if (deck[cardN].rank === 1) {
        dAce = true;
        dHandVal += 1;
        dAceHand = dHandVal + 10;
    }
    
    else {
        dHandVal += deck[cardN].rank;
        dAceHand += deck[cardN].rank;
    }

    if (dHiddencard === true) {
        document.getElementById("dHandVal").innerHTML = "";
    }
    else if (dHandVal > 21){
        document.getElementById("dHandVal").innerHTML = "BUST";
    }
    else if (dAce === false || dAceHand > 21) {
    dAce = false;
    document.getElementById("dHandVal").innerHTML = dHandVal;
    }
    
    else if (dAceHand === 21) {
        dHandVal = dAceHand;
        document.getElementById("dHandVal").innerHTML = dHandVal;
    }
    
    
    }

    function drawPlayer(){
        cardN += 1;
    
        printHand();
        pHand += outHand;
        document.getElementById("pHand").innerHTML = pHand;
    
        if (deck[cardN].rank > 10) {
            pHandVal += 10;
            aceHand += 10;
        }
        
        
        else if (deck[cardN].rank === 1) {
            ace = true;
            pHandVal += 1;
            aceHand = pHandVal + 10;
        }
        
        
        else {
            pHandVal += deck[cardN].rank;
            aceHand += deck[cardN].rank;
        }
        if (pHandVal > 21){
            playerBust = true;
            document.getElementById("pHandVal").innerHTML = "BUST";
            pHandVal = 0;
            aceHand = 0;
            stand();
        }
        else if (ace === false || aceHand > 21) {
        ace = false;
        document.getElementById("pHandVal").innerHTML = pHandVal;
        }
        
        else {
        let aceHandOut = pHandVal + " / " + aceHand;
        
        
        document.getElementById("pHandVal").innerHTML = aceHandOut;
            }
        }