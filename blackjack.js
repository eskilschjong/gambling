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
    roundActive = false;
    document.getElementById("bank").innerHTML = bank + " EC";
    document.getElementById("test").innerHTML = "Press deal to start round";

    document.getElementById("deal").style.backgroundColor = "rgb(9, 186, 0)"
    document.getElementById("stand").style.backgroundColor = "#6e6e6e";
    document.getElementById("hit").style.backgroundColor = "#6e6e6e";
    document.getElementById("double").style.backgroundColor = "#6e6e6e";

    newDeck();
    shuffle(deck);
}

function newDeck(){
    cardN = 0;
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
let disableDouble = false;
let playerBust = true;

let dHiddencard = true;

function bet(){
    getAmount = $("#bet").val();
    betAmount += +getAmount;
    if (betAmount > bank) {
        document.getElementById("test").innerHTML = "Your bet can not be higher than your total balance";
        roundActive = false;
        throw new Error("Bet value exceeds bank value.");
    }
    bank += -+getAmount;
    document.getElementById("bank").innerHTML = bank + " EC";
}

function deal(){
    if (roundActive === false) {
    roundActive = true;
    document.getElementById("deal").style.backgroundColor = "#6e6e6e";
    document.getElementById("stand").style.backgroundColor = "rgb(170, 0, 0)";
    document.getElementById("hit").style.backgroundColor = "rgb(9, 186, 0)";
    document.getElementById("double").style.backgroundColor = "blueviolet";

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
    disableDouble = false;
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
}

function hit() {
    document.getElementById("double").style.backgroundColor = "#6e6e6e";
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
    disableDouble = true;
}


function double() {
    if (roundActive === true && disableDouble === false){
    bet();

    hit();
    stand();
    document.getElementById("bank").innerHTML = bank;
    }
    if (disableDouble === true) {
        document.getElementById("test").innerHTML = "Double is disabled. You can not double after your first hit";
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
    
    if (dHandVal === pHandVal) {
        document.getElementById("test").innerHTML = "Push! Bet refunded!";
        bank += +betAmount;
        document.getElementById("bank").innerHTML = bank + " EC";
    }
    
    else if ((dHandVal > 21 || dHandVal < pHandVal) && (playerBust === false)) {
        document.getElementById("test").innerHTML = "You won! " + betAmount + " eskil-coins added to balance!";
        bank += +betAmount + +betAmount;
            if (blackjack === false){
            
            }
            else {
                bank += +betAmount/2;
                let blackjackPrize = +betAmount + +betAmount/2;
                document.getElementById("test").innerHTML = "BLACKJACK! " + blackjackPrize + " eskil-coins added to balance!";
            }
            document.getElementById("bank").innerHTML = bank + " EC";

            
    }

    else if (dHandVal > pHandVal || playerBust === true) {
        document.getElementById("test").innerHTML = "You lose! " + betAmount + " eskil-coins removed from balance!";
    }
    document.getElementById("deal").style.backgroundColor = "rgb(9, 186, 0)"
    document.getElementById("stand").style.backgroundColor = "#6e6e6e";
    document.getElementById("hit").style.backgroundColor = "#6e6e6e";
    document.getElementById("double").style.backgroundColor = "#6e6e6e";
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
    if (cardN === 51){
        newDeck();
        shuffle(deck);
    }
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
        if (cardN === 51){
            newDeck();
            shuffle(deck);
        }
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